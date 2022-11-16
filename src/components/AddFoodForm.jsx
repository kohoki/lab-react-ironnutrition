import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
    const [newName, setNewName] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newCalories, setNewCalories] = useState(0)
    const [newServings, setNewServings] = useState(0)

    const handleSubmit = event =>{
        
        event.preventDefault()
        const NewFood = {newName, newImage, newCalories, newServings}
        console.log(NewFood)
    }

  return (
    <form onSubmit={handleSubmit} style={{ width: 230 , margin: "20px"}}>
      <Divider>Add Food Entry</Divider>

      <label>Name <Input type="text" value={newName} onChange={event => setNewName(event.target.value)}/></label>

      <label>Image<Input type="text" value={newImage} onChange={event => setNewImage(event.target.value)}/></label>
      
      <label>Calories<Input type="number" value={newCalories} onChange={event => setNewCalories(event.target.value)}/></label>
      
      <label>Servings<Input type="number" value={newServings} onChange={event => setNewServings(event.target.value)}/></label>
      
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;