import React, { Component } from 'react';
import CreateGame from '../CreateGame';
import GameList from '../GameList';


class GameContainer extends Component {
  constructor(){
    super();

    this.state = {
      games: []
    }
  }
  getGames = async () => {
    // where we will make our fetch call to get all games
    const games = await fetch('http://localhost:9000/api/v1/games')
    const gamesParsedJSON = await games.json();
    return gamesParsedJSON
  }
  componentDidMount(){
    // get all the games, on the intial load of the app
    this.getGames().then((games) => {
      this.setState({games: games.data})
    }).catch((err) => {
      console.log(err);
    })
    //  call to get all the games
  }

  addGame = async (game, e) => {
    // .bind arguments take presidence over every othe argument
    e.preventDefault();
    console.log(game);

    try {
      // we have to send JSON
      // createdgame variable will store the response from the express API
      const createdGame = await fetch('http://localhost:9000/api/v1/games', {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
          'Content-Type': 'application/json'
        }
      });
// we have to turn the response from express into
// an object we can use
      const parsedResponse = await createdGame.json();
      console.log(parsedResponse, ' this is response');
// we are emptying all the games that are living in the state into a new array
// and then addig the game we just created to the end of it
// the newGame is called parsedResponse.data
      this.setState({games: [...this.state.games, parsedResponse.data]})

    } catch(err){
    console.log(err)
  }


  }
  render(){
    console.log(this.state);
    return (
      <div>
        <CreateGame addGame={this.addGame}/>
        <GameList games={this.state.games}/>
      </div>
    )
  }
}

export default GameContainer;
