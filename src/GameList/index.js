
import React from 'react';
import { Card, Button} from 'semantic-ui-react';

// Pure Function, takes an input and renders ui
const Games = (props) => {
  // you'll propably have to map over the games and create your list items here
  const games = props.Games.map((game, i) => {
    return (
      <Card key={game._id}>
        <Card.Content>
          <Card.Header>{game.title}</Card.Header>
          <Card.Description>{game.course}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="green" onClick={props.openAndEdit.bind(null, game)}>Edit Game</Button>
          <Button color="red" onClick={props.deleteGame.bind(null, game._id)}>Delete Game</Button>
        </Card.Content>
      </Card>
      )
  });

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
