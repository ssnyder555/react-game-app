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
            <input type='text' name='title' value={this.state.title} onChange={this.updateMovie}/>
        </label>
        <label>
          Holes:
            <input type='Number' name='Holes' value={this.state.title} onChange={this.updateMovie}/>
        </label>
        <label>
          Swings:
            <input type='Number' name='Swings' value={this.state.title} onChange={this.updateMovie}/>
        </label>
        <button type='Submit'>Create Game</button>
      </form>
    )
  }

}

export default CreateGame;
