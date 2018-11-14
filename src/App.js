import React, { Component } from 'react';
import './App.css';
import GameContainer from './GameContainer';
import Header from './Header';
import MapContainer from './MapContainer';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/games" component={GameContainer}/>
          <Route exact path="/map" component={MapContainer}/>

        </Switch>
      </div>
    );
  }
}

export default App;
