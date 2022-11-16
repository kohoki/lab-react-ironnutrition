import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';



function App() {
  const [food, setfood] = useState(foods);

  const addNewFood = (New) => {
    console.log(New)
    const updatedFoods = [...food, New];
    console.log(updatedFoods)
   
    setfood(updatedFoods);
  };

  return (
    <div className="App">
          
          <Row style={{ width: '100%',display: 'flex', justifyContent: 'center'}}>
            <AddFoodForm addFood = {addNewFood}/>
          </Row>
          
      <Button> Hide Form / Add New Food </Button>

      <Row style={{ width: '100%',display: 'flex', justifyContent: 'center'}}>  
        <Search/>
      </Row>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%',display: 'flex', justifyContent: 'center'}}> 
        {food.map((element)=>{
          return(
            <FoodBox key={element.name} food={element}/>
          )
        })}

        {/* <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }} /> */}

      </Row>
    
    </div>
  );
}

export default App;
