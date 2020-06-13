import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './global.css';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={Cart} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    )
  }
};

export default App;
