import React, { Component } from 'react';
import './App.css';
import './styles/main.css'

import routes from './routes.js';
import Header from './Components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
