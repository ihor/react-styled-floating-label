import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

import Example from '../components/Example';
import FieldGroup from '../components/FieldGroup';
import Button from '../components/Button';

const BlueFloatingLabel = styled(FloatingLabel)`
    color: #0070e0;
`;

const Input = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    
    border: none;
    border-bottom: 0.5px solid #bdbdbd;
    
    font-size: 1.25em;
    padding-left: 0.25em;
    padding-top: 0.25em;
    min-width: 20em;
    
    :focus {
        border-color: #5eaefe;
        outline: none;
    }
`;

const code = `
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

const BlueFloatingLabel = styled(FloatingLabel)\`
    color: #0070e0;
\`;

const Input = styled.input\`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    
    border: none;
    border-bottom: 0.5px solid #bdbdbd;
    
    font-size: 1.25em;
    padding-left: 0.25em;
    padding-top: 0.25em;
    min-width: 20em;
    
    :focus {
        border-color: #5eaefe;
        outline: none;
    }
\`;

const email = (
    <BlueFloatingLabel text="Email">
        <Input type="email" />
    </BlueFloatingLabel>
);
`;

const TypicalUsageExample: FunctionComponent = () =>
    <Example
        title="Typical Usage"
        code={code}>
        <FieldGroup>
            <BlueFloatingLabel text="Email">
                <Input type="email" />
            </BlueFloatingLabel>
        </FieldGroup>

        <FieldGroup>
            <BlueFloatingLabel text="Password">
                <Input type="password" />
            </BlueFloatingLabel>
        </FieldGroup>

        <Button>Sign In</Button>
    </Example>;

export default TypicalUsageExample;

