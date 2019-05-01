React-Styled-Floating-Label
===========================
Floating label component which works with any HTML input. Supports styling with [styled-components](https://styled-components.com). Check this [live demo](http://ihor.burlachenko.com/open-source/react-styled-floating-label-demo/) to see it in action.

![Typical Usage Screen Recording](https://github.com/ihor/react-styled-floating-label/blob/master/demo/screen-recordings/typical-usage.gif?raw=true)

Installation
============
`npm i react-styled-floating-label styled-components --save`


Usage
=====

### Typical Usage Example

```jsx
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

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

const email = (
    <BlueFloatingLabel text="Email">
        <Input type="email" />
    </BlueFloatingLabel>
);
```

![Typical Usage Screen Recording](https://github.com/ihor/react-styled-floating-label/blob/master/demo/screen-recordings/typical-usage.gif?raw=true)

### Styling With Props

```jsx
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
```

![Styling With Props Screen Recording](https://github.com/ihor/react-styled-floating-label/blob/master/demo/screen-recordings/styling-with-props.gif?raw=true)

### Styled Placeholder

```jsx
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

const address = (
    <FloatingLabelWithStyledPlaceholder text="Address">
        <Input />
    </FloatingLabelWithStyledPlaceholder>
);
```

![Styled Placeholder Screen Recording](https://github.com/ihor/react-styled-floating-label/blob/master/demo/screen-recordings/styled-placeholder.gif?raw=true)

### Custom Positioning

```jsx
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

const firstName = (
    <VerticallyPositionedFloatingLabel text="First Name">
        <Input />
    </VerticallyPositionedFloatingLabel>
);

const lastName = (
    <HorizontallyPositionedFloatingLabel text="Last Name">
        <Input />
    </HorizontallyPositionedFloatingLabel>
);
```

![Custom Positioning Screen Recording](https://github.com/ihor/react-styled-floating-label/blob/master/demo/screen-recordings/custom-positioning.gif?raw=true)

You can check all examples in action in this [live demo](http://ihor.burlachenko.com/open-source/react-styled-floating-label-demo/).

API
===

### Props

Prop             | Required | Default Value  | Description
-----------------|----------|----------------|--------------------------
 :---            | :---     |           ---: | :---
text             | Required |                | Label text
style            | Optional |           `{}` | Label style for projects which are not using `styled-components`
placeholderStyle | Optional |           `{}` | Placeholder style for projects which are not using `styled-components`
container        | Optional |          `div` | Component container
label            | Optional |        `label` | Label component

### styled-components

Label can be styled with [styled-components](https://styled-components.com):

```jsx
import styled from 'styled-components';
import FloatingLabel from 'react-styled-floating-label';

const BlueFloatingLabel = styled(FloatingLabel)`
    color: #0070e0;
`;
```

To style the placeholder use standard CSS properties with the "--placeholder-" prefix:

```jsx
const BlueFloatingLabelWithBoldPlaceholder = styled(BlueFloatingLabel)`
    --placeholder-font-weight: bold;
`;
```

Feedback
========

There are no mailing lists or discussion groups yet. Please use GitHub issues and pull request or follow me on Twitter [@IhorBurlachenko](https://twitter.com/IhorBurlachenko)
