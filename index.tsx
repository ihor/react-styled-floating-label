import React, { ComponentType, ReactNode, ReactElement } from 'react';
import styled from 'styled-components';

type FloatingLabelProps = {
    text: string;
    children: ReactElement<HTMLInputElement>;
    style?: object;
    placeholderStyle?: object;
    container?: ComponentType|string;
    label?: ComponentType|string;
    className?: string; // for compatibility with styled-components
};

type FloatingLabelState = {
    inputStyle: CSSStyleDeclaration|null;
};

const randomString = (length: number): string =>
    Math.random().toString(36).substring(length + 1);

const pxValue = (value): number =>
    parseInt(value && value.replace('px', ''));

class FloatingLabel extends React.Component<FloatingLabelProps, FloatingLabelState> {
    private inputRef: HTMLInputElement|null = null;
    private inputClass: string = 'flf-' + randomString(6);

    public static defaultProps = {
        container: 'div',
        label: 'label',
        style: {},
        placeholderStyle: {},
    };

    public state: FloatingLabelState = {
        inputStyle: null
    };

    public componentDidMount(): void {
        if (this.inputRef === null) {
            throw new Error('FloatingLabelField: No input element. Did you pass a valid DOM input element?');
        }
        else {
            this.setState({
                inputStyle: window.getComputedStyle(this.inputRef)
            });
        }
    }

    private getClassNameStyle(): CSSStyleDeclaration|null {
        const { className } = this.props;

        if (!className) {
            return null;
        }

        const getCssStyleByClassName = (className: string): CSSStyleDeclaration|null => {
            for (const styleSheet of document.styleSheets) {
                try {
                    if (styleSheet.cssRules) {
                        for (const cssRule of styleSheet.cssRules) {
                            if (cssRule.selectorText.includes(className)) {
                                return cssRule.style;
                            }
                        }
                    }
                }
                catch (e) {}
            }

            return null;
        };

        const [classNameStyle] = className
            .split(' ')
            .map(getCssStyleByClassName)
            .filter(cssRule => !!cssRule);

        return classNameStyle;
    }

    private getLabelStyleProperties(
        inputStyle: CSSStyleDeclaration,
        classNameStyle: CSSStyleDeclaration|null
    ): object {
        const {
            height,
            fontSize,
            borderTopWidth,
            paddingLeft,
            borderLeftWidth
        } = inputStyle;

        const top = pxValue(height) / 2 - pxValue(fontSize) / 2 + pxValue(borderTopWidth);

        const labelStyle = {
            display: 'inline-block',
            pointerEvents: 'none',

            position: 'absolute',
            top: top,
            left: pxValue(paddingLeft) + pxValue(borderLeftWidth),

            transition: '200ms ease all',
            transformOrigin: 'left top',
            transform: `translateY(-${top + pxValue(fontSize) * 0.75}px)`,

            fontSize: pxValue(fontSize) * 0.75,
        };

        if (classNameStyle) {
            for (const property in labelStyle) {
                if (classNameStyle[property]) {
                    labelStyle[property] = classNameStyle[property];
                }
            }
        }

        if (this.props.style) {
            return {
                ...labelStyle,
                ...this.props.style,
            };
        }

        return labelStyle;
    }

    private getPlaceholderStyleProperties(
        inputStyle: CSSStyleDeclaration,
        classNameStyle: CSSStyleDeclaration|null
    ): object {
        const { fontSize } = inputStyle;

        // We cannot automatically get placeholder styles because of the bug in Chrome
        // https://bugs.chromium.org/p/chromium/issues/detail?id=850744
        // https://bugs.chromium.org/p/chromium/issues/detail?id=884537
        const placeholderStyle = {
            transform: 'none',
            fontSize: pxValue(fontSize),
            fontWeight: 300,
            color: 'rgb(117, 117, 117)',
            margin: 0,
            padding: 0,
        };

        if (classNameStyle) {
            let property, value;

            for (let i = 0; ; ++i) {
                if (!classNameStyle.hasOwnProperty(i)) {
                    break;
                }

                if (classNameStyle[i].startsWith('--placeholder-')) {
                    property = classNameStyle[i].replace('--placeholder-', '');
                    value = classNameStyle.getPropertyValue(classNameStyle[i]);

                    placeholderStyle[property] = value;
                }
            }
        }

        if (this.props.placeholderStyle) {
            return {
                ...placeholderStyle,
                ...this.props.placeholderStyle,
            };
        }

        return placeholderStyle;
    }

    public render(): ReactNode {
        const input = React.Children.only(this.props.children);
        const { id, name } = input.props;
        const labelHtmlFor = id || name;

        // https://github.com/facebook/react/issues/8873#issuecomment-275423780
        const inputWithRef = React.cloneElement(input, {
            ref: node => {
                // Keep your own reference
                if (node !== null && node.classList) {
                    this.inputRef = node;

                    // And mark it with our custom class to track the placeholder visibility
                    this.inputRef.classList.add(this.inputClass);
                    this.inputRef.placeholder = ' ';
                }

                // Call the original ref, if any
                if (input.hasOwnProperty('ref') && typeof input['ref'] === 'function') {
                    input['ref'](node);
                }
            },
        });

        const { inputStyle } = this.state;
        const {
            text,
            className,
            container,
            label
        } = this.props;

        if (!inputStyle) {
            // Fooling styled-components to avoid "It looks like you've wrapped styled() around your React component,
            // but the className prop is not being passed down to a child." warnings
            return (
                <div>
                    {inputWithRef}
                    <label className={className} style={{display: 'none'}} />
                </div>
            );
        }

        const classNameStyle = this.getClassNameStyle();

        // Label has to be defined inside the render function in order to
        // have linking to the container
        const Label = styled(label)(this.getLabelStyleProperties(inputStyle, classNameStyle));

        const Container = styled(container)({
            position: 'relative',
            [`& .${this.inputClass}:not(:focus).${this.inputClass}:placeholder-shown + ${Label}`]:
                this.getPlaceholderStyleProperties(inputStyle, classNameStyle),
        });

        return (
            <Container>
                {inputWithRef}

                <Label htmlFor={labelHtmlFor} className={className}>
                    {text}
                </Label>
            </Container>
        );
    }
}

export default FloatingLabel;
