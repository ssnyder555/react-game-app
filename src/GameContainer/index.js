import React, { Component } from 'react';
import CreateGame from '../CreateGame';
import GameList from '../GameList';
// import EditGame from '../EditGame';


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
// handleEditChange = (e) => {
//
//   this.setState({
//     gameToEdit: {
//       ...this.state.gameToEdit,
//       [e.currentTarget.name]: e.currentTarget.value
//     }
//   });
//
// }
// closeAndEdit = async (e) => {
//   // Put request,
//   e.preventDefault();
//   // then update state
//   try {
//
//     const editResponse = await fetch('http://localhost:9000/api/v1/games' + this.state.gameToEdit._id, {
//       method: 'PUT',
//       body: JSON.stringify({
//         title: this.state.gameToEdit.title,
//         description: this.state.gameToEdit.description
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//
//     const editResponseParsed = await editResponse.json();
//
//     const newGameArrayWithEdit = this.state.games.map((game) => {
//
//       if(game._id === editResponseParsed.data._id){
//         game = editResponseParsed.data
//       }
//
//       return game
//     });
//
//     this.setState({
//       showEditModal: false,
//       games: newGameArrayWithEdit
//     });
//
//     console.log(editResponseParsed, ' parsed edit')
//
//
//
//
//   } catch(err){
//     console.log(err)
//   }
//
//   // If you feel up to make the modal (EditMovie Component) and show at the appropiate times
//
// }
// openAndEdit = (gameFromTheList) => {
//   console.log(gameFromTheList, ' gameToEdit  ');
//
//
//   this.setState({
//     showEditModal: true,
//     movieToEdit: {
//       ...gameFromTheList
//     }
//   })
// }



  render(){
    console.log(this.state);
    return (
      <div>
        <CreateGame addGame={this.addGame}/>
        <GameList games={this.state.games} deleteGame={this.deleteGame}/>
      </div>
    )
  }
}

export default GameContainer;
