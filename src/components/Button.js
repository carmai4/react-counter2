import React, { Component } from 'react'
import './Button.css';

export default class Button extends Component {

  render() {
    let { title, task, testid } = this.props;
    return <button onClick= { task } data-testid={ testid }>{ title }</button>;
  }
}