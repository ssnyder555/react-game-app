import React from 'react';
 const EditGame = (props) => {
   return (
    <div>
      <h4>Edit Location</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Game Score:
          <br/>
          <input type='text' name='title' value={props.gameToEdit.title} onChange={props.handleEditChange}/>
        </label>
        <label>
          Edit number of holes:
          <br/>
          <input type='number' name='numberOfHoles' value={props.numberOfHoles} onChange={props.handleEditChange}/>
        </label>
        <label>
          Edit Swings:
          <br/>
          <input type='number' name='swings' value={props.swings} onChange={props.handleEditChange}/>
        </label>
        <button type='submit'>Edit Game</button>
      </form>
    </div>
    )
}
 export default EditGame;
