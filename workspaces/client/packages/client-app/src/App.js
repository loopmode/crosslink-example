import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { cx } from '@client/utils'
import { hello } from '@common/utils'

class App extends Component {
  render() {
    console.log('>> common/utils in client:', hello());
    return (
      <div className={cx('foo', "App")}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
