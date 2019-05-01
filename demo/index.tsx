import '@babel/polyfill';
import 'react-hot-loader';

import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import TypicalUsageExample from './examples/TypicalUsageExample';
import StylingWithPropsExample from './examples/StylingWithPropsExample';
import DefaultBehaviorExample from './examples/DefaultBehaviorExample';
import StyledPlaceholderExample from './examples/StyledPlaceholderExample';
import CustomPositioningExample from './examples/CustomPositioningExample';

const Container = styled.div`
    padding: 30px;
`;

const Demo: FunctionComponent = () =>
    <Container>
        <TypicalUsageExample />
        <StylingWithPropsExample />
        <DefaultBehaviorExample />
        <StyledPlaceholderExample />
        <CustomPositioningExample />
    </Container>;

ReactDOM.render(<Demo />, document.getElementById('root'));
