import React, { Component } from 'react';
import CreateGame from '../CreateGame';
import GameList from '../GameList';
import EditGame from '../EditGame';
// import MapContainer from '../MapContainer';

class GameContainer extends Component {
  constructor(){
    super();

    this.state = {
      games: [],
      gameToEdit: {
        title: '',
        numberOfHoles: Number,
        swings: Number,
        _id: ''
      },
      showEditModal: false

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

  deleteGame = async (id) => {

    const deleteGameResponse = await fetch('http://localhost:9000/api/v1/games/' + id, {
                                              method: 'DELETE'
                                            });

    // This is the parsed response from express
    const deleteGameParsed = await deleteGameResponse.json();
    // Now that the db has deleted our item, we need to remove it from state
    this.setState({games: this.state.games.filter((game) => game._id !== id )})

    console.log(deleteGameParsed, ' response from express server')
      // Then make the delete request, then remove the game from the state array using filter
}
handleEditChange = (e) => {

  this.setState({
    gameToEdit: {
      ...this.state.gameToEdit,
      [e.currentTarget.name]: e.currentTarget.value
    }
  });

}
// gameToEdit: {
//   _id: this.state.gameToEdit._id,
//   title: this.state.gameToEdit,
//   numberOfHoles: this.state.gameToEdit.numberOfHoles,
//   swings: this.state.gameToEdit.swings
// }
closeAndEdit = async (e) => {
  e.preventDefault();
  try{
    const editResponse = await fetch('http://localhost:9000/api/v1/games/' + this.state.gameToEdit._id, {
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.gameToEdit.title,
        numberOfHoles: this.state.gameToEdit.numberOfHoles,
        swings: this.state.gameToEdit.swings
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const editResponseParsed = await editResponse.json();

    const newGameArrayWithEdit = this.state.games.map((game) => {
      if(game._id === editResponseParsed.data._id) {
        game = editResponseParsed.data
      }
      return game
    });

    this.setState({
      showEditModal: false,
      game: newGameArrayWithEdit
    });
    console.log(editResponseParsed, ' parsed edit');
  } catch(err){
    console.log(err);
  }

}
openAndEdit = (gameFromTheList) => {
  console.log(gameFromTheList, ' gametoedit  ');


  this.setState({
    showEditModal: true,
    gameToEdit: {
      ...gameFromTheList
    }
  })

}
  render(){
    console.log(this.state);
    return (
      <div>
        <CreateGame addGame={this.addGame}/>
        <GameList games={this.state.games} deleteGame={this.deleteGame} openAndEdit={this.openAndEdit}/>

        {this.state.showEditModal ? <EditGame  gameToEdit={this.state.gameToEdit} handleEditChange={this.handleEditChange} closeAndEdit/> : null}

      </div>
    )
  }
}

export default GameContainer;
