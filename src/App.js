import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [food, setfood] = useState(foods);

  return (
    <div className="App">
          {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%',display: 'flex', justifyContent: 'center', flexdirection: 'column' }}>

        
        {food.map((element)=>{
          return(
            <Card key = { element.image }>
              <div>
                <p> { element.name } </p>
                <img src = { element.image } width = "100" />
              </div>
            </Card>
          )
        })}


      </Row>
    
    </div>
  );
}

export default App;
