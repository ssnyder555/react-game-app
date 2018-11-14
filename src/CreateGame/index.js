import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';


class CreateGame extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      course: '',
    }
  }
  updateGame = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})


  }
  render(){
    return (
      <Segment>
        <h5>Create New Game!</h5>
        <Form onSubmit={this.props.addGame.bind(null, this.state)}>
          <Label>Game:</Label>
          <Form.Input type='text' name='title' value={this.state.title} onChange={this.updateGame}/>
          <Label>Couse:</Label>
          <Form.Input type='text' name='course' value={this.state.course} onChange={this.updateGame}/>
          <Button color="blue" type='Submit'>Create Game</Button>
        </Form>
      </Segment>
      )
  }
}
export default CreateGame;
