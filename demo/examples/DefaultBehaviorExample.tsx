import React, { FunctionComponent } from 'react';
import FloatingLabel from 'react-styled-floating-label';
import styled from 'styled-components';

import Example from '../components/Example';
import FieldGroup from '../components/FieldGroup';

const BigInput = styled.input`
    height: 4em;
    font-size: 2em;
`;

const code = `
import FloatingLabel from 'react-styled-floating-label';
import styled from 'styled-components';

const BigInput = styled.input\`
    height: 4em;
    font-size: 2em;
\`;

const lastName = (
    <FloatingLabel text="Last Name">
        <BigInput />
    </FloatingLabel>
);
`;

const DefaultBehaviorExample: FunctionComponent = () =>
    <Example
        title="Default Behavior"
        code={code}>
        <FieldGroup>
            <FloatingLabel text="First Name">
                <input />
            </FloatingLabel>
        </FieldGroup>

        <FieldGroup>
            <FloatingLabel text="Last Name">
                <BigInput />
            </FloatingLabel>
        </FieldGroup>
    </Example>;

export default DefaultBehaviorExample;

