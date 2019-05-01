import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

import Example from '../components/Example';
import FieldGroup from '../components/FieldGroup';

const VerticallyPositionedFloatingLabel = styled(FloatingLabel)`
    transform: translateY(-10px);
`;

const HorizontallyPositionedFloatingLabel = styled(FloatingLabel)`
    margin-left: 20px;
`;

const Input = styled.input`
    font-size: 1em;
`;

const code = `
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

const VerticallyPositionedFloatingLabel = styled(FloatingLabel)\`
    transform: translateY(-10px);
\`;

const HorizontallyPositionedFloatingLabel = styled(FloatingLabel)\`
    margin-left: 20px;
\`;

const Input = styled.input\`
    font-size: 1em;
\`;

const firstName = (
    <VerticallyPositionedFloatingLabel text="First Name">
        <Input />
    </VerticallyPositionedFloatingLabel>
);
`;

const CustomPositioningExample: FunctionComponent = () =>
    <Example
        title="Custom Positioning"
        code={code}>
        <FieldGroup>
            <VerticallyPositionedFloatingLabel text="First Name">
                <Input />
            </VerticallyPositionedFloatingLabel>
        </FieldGroup>

        <FieldGroup>
            <HorizontallyPositionedFloatingLabel text="Last Name">
                <Input />
            </HorizontallyPositionedFloatingLabel>
        </FieldGroup>
    </Example>;

export default CustomPositioningExample;

