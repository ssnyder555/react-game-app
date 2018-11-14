import React from 'react';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

 const EditGame = (props) => {
   console.log(props);
   return (
     <Modal open={props.open}>
       <Header>Edit Game</Header>
       <Modal.Content>
         <Form onSubmit={props.closeAndEdit}>
           <Label>
             Edit Course Title:
           </Label>
           <Form.Input type='text' name='title' value={props.gameToEdit.title} onChange={props.handleEditChange}/>
           <Label>
             Edit Number of Holes:
           </Label>
           <Form.Input type='text' name='numberOfHoles' value={props.gameToEdit.numberOfHoles} onChange={props.handleEditChange}/>
           <Label>
             Swings:
           </Label>
           <Form.Input type='text' name='swings' value={props.gameToEdit.swings} onChange={props.handleEditChange}/>
           <Modal.Actions>
             <Button color='blue' type='submit'>Edit Game</Button>
           </Modal.Actions>
         </Form>
       </Modal.Content>
     </Modal>
     )
 }
 export default EditGame;
