import React from 'react';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

 const EditGame = (props) => {
   console.log(props, ' the is the propsssssss')
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
             Course:
           </Label>
           <Form.Input type='text' name='course' value={props.gameToEdit.course} onChange={props.handleEditChange}/>
           <Modal.Actions>
             <Button color='blue' type='submit'>Edit Game</Button>
           </Modal.Actions>
         </Form>
       </Modal.Content>
     </Modal>
     )
 }
 export default EditGame;
