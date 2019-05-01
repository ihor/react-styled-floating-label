import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

import Example from '../components/Example';
import FieldGroup from '../components/FieldGroup';

const FloatingLabelWithStyledPlaceholder = styled(FloatingLabel)`
    --placeholder-color: #328a09;
    --placeholder-font-weight: bold;
`;

const Input = styled.input`
    font-size: 1em;
`;

const code = `
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

const FloatingLabelWithStyledPlaceholder = styled(FloatingLabel)\`
    --placeholder-color: #328a09;
    --placeholder-font-weight: bold;
\`;

const Input = styled.input\`
    font-size: 1em;
\`;

const address = (
    <FloatingLabelWithStyledPlaceholder text="Address">
        <Input />
    </FloatingLabelWithStyledPlaceholder>
);
`;

const StyledPlaceholderExample: FunctionComponent = () =>
    <Example
        title="Styled Placeholder"
        code={code}>
        <FieldGroup>
            <FloatingLabelWithStyledPlaceholder text="Address">
                <Input />
            </FloatingLabelWithStyledPlaceholder>
        </FieldGroup>
    </Example>;

export default StyledPlaceholderExample;

