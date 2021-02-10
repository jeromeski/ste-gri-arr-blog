/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />
    }
  }
  return ComposedComponent;
}