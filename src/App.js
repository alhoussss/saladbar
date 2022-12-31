import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Ingredients from './S_une.js';
import reactbootstrap from "./reactbootstrap";
import Recap from "./recap.js";
import { Button } from 'react-bootstrap';
import AdditionalContentExample from './reactbootstrap';



function App() {
  return (
    <>
      <div className="App">
      <header>
        <h1 className='name'> SaladBar </h1>
      </header>
    </div>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path="/Order" element={<Order/>} />
      <Route path='/Order/Ingredients' element={<Ingredients/>}/>
      <Route path='/Order/Ingredients/Recap' element={<Recap/>}/>;
    </Routes>
  
    </>

  );
}

function Form(){

  const [username, setusername] = useState("")
  const handlechange = (event) => {
    setusername(event.target.value);
  }
  let navigate = useNavigate();
  return(
    <>
      <div id='background'>
        <div id='User'>
          <h3>Order ID:434.95451332890076</h3>
          <h3>username:{username}</h3>
        </div>
        
        <form className='form'>
        <input type='text' placeholder='Username ' value={username} onChange = {handlechange} /> 
        <Button variant="success" className='ord' size="lg" onClick= {()=> navigate('/Order')} enable>Start my order</Button>
        </form>
      </div>
    </>
  )

}



function Order(handlechange){
  const { username } = handlechange;
  let navigate = useNavigate();
  return(
      <>
          <div id="User">
            <h3>Order ID:434.95451332890076</h3>
            <h3>username:{username}</h3>
          </div>
          <div id="Order">
              <form >
                <button className="button" onClick={() => navigate('/Order/Ingredients')}>Assiettes de crudité</button>
                <button className="boisson" onClick={() => navigate('/Order/Ingredients')}>Expresso</button>
                <button className="dessert" onClick={() => navigate('/Order/Ingredients')}> Macaron</button><br/>
                <button className="button" onClick={() => navigate('/Order/S_deux')}>Méli-mélo de crudités</button>
                <button className="boisson" onClick={() => navigate('/Order/Ingredients')}>Chocolat</button>
                <button className="dessert" onClick={() => navigate('/Order/Ingredients')}>Île flottante</button><br/>
                <button className="button" onClick={() => navigate('/Order/Ingredients')}>Panaché de crudités</button>
                <button className="boisson" onClick={() => navigate('/Order/Ingredients')}>Capuccino</button>
                <button className="dessert" onClick={() => navigate('/Order/Ingredients')}>mille-feuille</button><br/>
                <button className="button" onClick={() => navigate('/Order/Ingredients')}>Crudités Bulgare</button>
                <button className="boisson" onClick={() => navigate('/Order/Ingredients')}>Ice-Thea</button>
                <button className="dessert" onClick={() => navigate('/Order/Ingredients')}>Tarte au citron</button><br/>
                <button className="button" onClick={() => navigate('/Order/Ingredients')}>Salade Arc-en-ciel</button>
                <button className="boisson" onClick={() => navigate('/Order/Ingredients')}>Jus d'orange</button>
                <button className="dessert" onClick={() => navigate('/Order/Ingredients')}>crème brûlée</button>
              </form>
          </div>
          
      </>

  );
}
export default App;