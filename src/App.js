import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm.js';
import './App.css';
import './styles/main.css'

import routes from './routes.js';

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
