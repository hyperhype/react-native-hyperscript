# react-native-hyperscript

# a fork of [react-hyperscript](https://github.com/mlmorg/react-hyperscript) [![Build Status](https://travis-ci.org/mlmorg/react-hyperscript.png?branch=master)](https://travis-ci.org/mlmorg/react-hyperscript)

Hyperscript syntax for ~~React.js~~ React Native markup.

## Usage

```js
var h = require('react-native-hyperscript');
var React = require('react-native');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

var AwesomeProject = React.createClass({
  render: function() {
    return h(View, { style: styles.container }, [
      h(Text, { style: styles.welcome }, 'hello from React Native!')
    ])
  }
});
```

## Documentation

#### `h(component, properties, children)`

Returns a React Native element.

- **component** `Object` - A React-native component.
- **properties** `Object` *(optional)* - An object containing the properties
you'd like to set on the element.
- **children** `Array|String` *(optional)* - An array of `h()` children or
a string. This will create child elements or text, respectively.
