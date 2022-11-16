import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
    const [name, setNewName] = useState('')
    const [image, setNewImage] = useState('')
    const [calories, setNewCalories] = useState(0)
    const [servings, setNewServings] = useState(0)

    const handleSubmit = event =>{
        
        event.preventDefault();
        const NewFood = {name, image, calories, servings}
        //console.log(NewFood)
        props.addFood(NewFood);
        setNewName('')
        setNewImage('')
        setNewCalories(0)
        setNewServings(0)
        
    }
    
  return (
    <form onSubmit={handleSubmit} style={{ width: 230 , margin: "20px"}}>
      <Divider>Add Food Entry</Divider>

      <label>Name <Input type="text" value={name} onChange={event => setNewName(event.target.value)}/></label>

      <label>Image<Input type="text" value={image} onChange={event => setNewImage(event.target.value)}/></label>
      
      <label>Calories<Input type="number" value={calories} onChange={event => setNewCalories(event.target.value)}/></label>
      
      <label>Servings<Input type="number" value={servings} onChange={event => setNewServings(event.target.value)}/></label>
      
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;