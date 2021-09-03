import React, { Component } from 'react';
import Button from './components/Button';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  double = () => {
    this.setState({
      count: this.state.count * 2
    })
  };

  toZero = () => {
    this.setState({
      count: 0
    })
  };

  render() {
    let { count } = this.state;
    return (
      <div class="main">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Count: { count }</h2>
        <div>
          <Button title = { '+' } task={ () => this.incrementCount() } />
          <Button title = { '-' } task={ () => this.decrementCount() } />
          <Button title = { 'x2' } task={ () => this.double() } />
          <Button title = { '0' } task={ () => this.toZero() } />
        </div>
      </div>
    );
  }
}
