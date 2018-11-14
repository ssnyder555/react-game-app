import React from 'react';



// DUMB COMPONENT
// pure function, takes an input and renders ui
const Games = (props) => {
  // map over the games to create a list
  const games = props.games.map((game, i) => {
    return (
      <li key={game._id}>
        <h5>{game.title}</h5>
        <small>{game.numberOfHoles}</small>
          <small>{game.swings}</small>

        <button onClick={props.openAndEdit.bind(null, game)}>Edit Game</button>
        <button onClick={props.deleteGame.bind(null, game._id)}>Delete Game</button>
      </li>
      )
  })

  return (
    <div>
      <h3>Disk-Games</h3>
      <ul>
        {games}
      </ul>
    </div>
    )
}
export default Games;
