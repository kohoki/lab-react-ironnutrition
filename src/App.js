import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';


function App() {
  const [food, setfood] = useState(foods);

  return (
    <div className="App">
          {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%',display: 'flex', justifyContent: 'center'}}> 
        {/* {food.map((element)=>{
          return(
            <Card key = { element.image }>
              <div>
                <p> { element.name } </p>
                <img src = { element.image } width = "100" />
              </div>
            </Card>
          )
        })} */}
        <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }} />

      </Row>
    
    </div>
  );
}

export default App;
