import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Form = styled.div`
    display: inline-block;
    vertical-align: top;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-right: 30px;
    margin-bottom: 30px;
    width: 25rem;
    box-shadow: rgba(0,0,0,0.15) 2px 2px 7px 1px;
`;

const Code = styled(SyntaxHighlighter)`
    display: inline-block !important;
    margin-top: 0;
    padding: 30px !important;
`;

type ExampleProps = {
    title: string;
    code: string;
    children: ReactElement | ReactElement[];
};

const Example = ({ title, code, children }: ExampleProps): ReactElement =>
    <div>
        <h2>{title}</h2>
        <Form>
            {children}
        </Form>
        <Code language="javascript" style={github}>
            {code}
        </Code>
    </div>;

export default Example;
