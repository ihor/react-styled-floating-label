import '@babel/polyfill';
import 'react-hot-loader';

import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import FloatingLabel from '../index';

const BlueFloatingLabel = styled(FloatingLabel)`
    color: #154291;
`;

const BlueBoldFloatingLabel = styled(BlueFloatingLabel)`
    font-weight: bold;
    transform: translateY(-10px);
    margin-left: 10px;
    --placeholder-color: #ff0000;
    --placeholder-font-weight: bold;
`;

const Container = styled.div`
    padding: 30px;
    flex: 1;
`;

const FieldGroup = styled.div`
    margin-bottom: 30px;
`;

const BigInput = styled.input`
    font-size: 32px;
`;

const EmInput = styled.input`
    height: 4em;
    font-size: 2em;
`;

const InputWithBigBorder = styled.input`
    font-size: 18px;
    border-width: 5px;
`;

const InputWithLeftPadding = styled.input`
    font-size: 18px;
    padding-left: 5px;
`;

const InlineContainer = styled.div`
    display: inline-block;
    margin-left: 15px;
`;

class Example extends React.Component {
    render(): ReactNode {
        return (
            <Container>
                <FieldGroup>
                    <InlineContainer>
                        <FloatingLabel text="Label">
                            <input placeholder="placeholder"  className="test"/>
                        </FloatingLabel>
                    </InlineContainer>

                    <InlineContainer>
                        <BlueFloatingLabel text="Label">
                            <input />
                        </BlueFloatingLabel>
                    </InlineContainer>

                    <InlineContainer>
                        <BlueBoldFloatingLabel text="Label">
                            <input />
                        </BlueBoldFloatingLabel>
                    </InlineContainer>
                </FieldGroup>

                <FieldGroup>
                    <InlineContainer>
                        <FloatingLabel text="Label">
                            <InputWithBigBorder />
                        </FloatingLabel>
                    </InlineContainer>

                    <InlineContainer>
                        <BlueFloatingLabel text="Label">
                            <InputWithBigBorder />
                        </BlueFloatingLabel>
                    </InlineContainer>

                    <InlineContainer>
                        <BlueBoldFloatingLabel text="Label">
                            <InputWithBigBorder />
                        </BlueBoldFloatingLabel>
                    </InlineContainer>
                </FieldGroup>

                <FieldGroup>
                    <InlineContainer>
                        <FloatingLabel text="Label">
                            <InputWithLeftPadding />
                        </FloatingLabel>
                    </InlineContainer>

                    <InlineContainer>
                        <FloatingLabel text="Label">
                            <InputWithLeftPadding />
                        </FloatingLabel>
                    </InlineContainer>
                </FieldGroup>

                <FieldGroup>
                    <InlineContainer>
                    <FloatingLabel text="Label">
                        <BigInput />
                    </FloatingLabel>
                    </InlineContainer>

                    <InlineContainer>
                        <FloatingLabel text="Label">
                            <BigInput />
                        </FloatingLabel>
                    </InlineContainer>
                </FieldGroup>

                <FieldGroup>
                    <InlineContainer>
                    <FloatingLabel text="Label">
                        <EmInput />
                    </FloatingLabel>
                    </InlineContainer>

                    <InlineContainer>
                        <FloatingLabel text="Label">
                            <EmInput />
                        </FloatingLabel>
                    </InlineContainer>
                </FieldGroup>


            </Container>
        );
    }
}

ReactDOM.render(<Example />, document.getElementById('root'));
