import React, from 'react';
import './App.css';
import GameContainer from './GameContainer';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/games" component={GameContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
