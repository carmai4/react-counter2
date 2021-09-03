import React, { Component } from 'react'
import './Button.css';

export default class Button extends Component {

  render() {
    let { title, task } = this.props;
    return <button onClick= { task }>{ title }</button>;
  }
}