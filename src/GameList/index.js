import React from 'react';
import { Card, Button} from 'semantic-ui-react';



// DUMB COMPONENT
// pure function, takes an input and renders ui
const Games = (props) => {
  // map over the games to create a list
  const games = props.games.map((game, i) => {
    return (
      <Card key={game._id}>
        <Card.Content>
          <Card.Header>{game.title}</Card.Header>
          <Card.NumberOfHoles>{game.numberOfHoles}</Card.NumberOfHoles>
          <Card.Swings>{game.swings}</Card.Swings>
        </Card.Content>
        <Card.Content extra>
          <Button color="blue" onClick={props.openAndEdit.bind(null, game)}>Edit Game</Button>
          <Button color="purple" onClick={props.deleteGame.bind(null, game._id)}>Delete Game</Button>
        </Card.Content>
      </Card>
      )
  })
  return (
    <div>
      <h3>Games</h3>
      <Card.Group className="centered">
        {games}
      </Card.Group>
    </div>
    )
}
export default Games;
