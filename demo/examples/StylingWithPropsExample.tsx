import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

import Example from '../components/Example';
import FieldGroup from '../components/FieldGroup';

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

const address = (
    <FloatingLabel
        text="Address"
        style={{
            color: '#0070e0',
        }}
        placeholderStyle={{
            fontWeight: 'bold',
        }}>
        <Input />
    </FloatingLabel>
);
`;

const StylingWithPropsExample: FunctionComponent = () =>
    <Example
        title="Styling With Props"
        code={code}>
        <FieldGroup>
            <FloatingLabel
                text="Address"
                style={{
                    color: '#0070e0',
                }}
                placeholderStyle={{
                    fontWeight: 'bold',
                }}>
                <Input />
            </FloatingLabel>
        </FieldGroup>
    </Example>;

export default StylingWithPropsExample;

