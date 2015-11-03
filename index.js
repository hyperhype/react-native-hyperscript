'use strict';
var parseTag = require('virtual-hyperscript/parse-tag');
var React = require('react-native');

module.exports = h;

function h(component, properties, children) {
  properties = properties || {};

  // If a child array or text node are passed as the second argument, shift them
  if (!children && isChildren(properties)) {
    children = properties;
    properties = {};
  }

  // When a selector, parse the tag name and fill out the properties object
  if (typeof component === 'string') {
    component = parseTag(component, properties);
  }

  // Create the element
  var args = [component, properties].concat(children);
  return React.createElement.apply(React, args);
}

function isChildren(x) {
  return typeof x === 'string' || Array.isArray(x);
}
