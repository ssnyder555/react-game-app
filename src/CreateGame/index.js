import React, { Component } from 'react';



class CreateGame extends Component {
  constructor(){
    super();

    this.state = {
      course: '',
      numberOfHoles: Number,
      swings: Number
    }
  }
  updateGame = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})


  }
  render(){
    return (
      <form onSubmit={this.props.addGame.bind(null, this.state)}>
        <label>
          Course:
            <input type='text' name='' value={this.state.course} onChange={this.updateGame}/>
        </label>
        <label>
          Holes:
            <input type='number' name='numberOfHoles' value={this.state.numberOfHoles} onChange={this.updateGame}/>
        </label>
        <label>
          Swings:
            <input type='number' name='swings' value={this.state.swings} onChange={this.updateGame}/>
        </label>
        <button type='Submit'>Create Game</button>
      </form>
    )
  }

}

export default CreateGame;
