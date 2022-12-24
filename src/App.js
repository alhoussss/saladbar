import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import Ingredients from './ingre.js';
import { Link } from "react-router-dom";




function App() {
  const [username, setusername] = useState("")

  return (
    <>

          <div className="App">
      <header>
        <h1 className='name'> SaladBar </h1>
      </header>
    </div>
    {username ? <Username username = {Username} /> : null }
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path="/Order" element={<Order/>} />
      <Route path='/Order/Ingredients' element={<Ingredients/>}/>
      <Route path='/Order/Ingredients/:id' component={Ingredients}/>
    </Routes>
  
    </>

  );
}
function Username(props){
  const {text} = props.username
  return(
    <>
      <p>{text}</p>
    </>
  );
  

}
function Form(){

  const [username, setusername] = useState("")
  let navigate = useNavigate();
  return(
    <>
      <div id='background'>
        <div id='User'>
          <h3>Order ID:434.95451332890076</h3>
          <h3>username:{username}</h3>
        </div>
        
        <form className='form'>
        <input type='text' placeholder='Username ' value={username} onChange = {e => setusername(e.target.value)} /> 
        <button className='ord' onClick={()=> navigate('/Order')}>Start my order</button>
        </form>
      </div>
    </>
  )

}

function Order(){
  let navigate = useNavigate();
  return(
      <>
          <div id="User">
          <h3>Order ID:434.95451332890076</h3>
          <h3>username:</h3>
          </div>
          <div id="Order">
              <form >
                <Link to="/Order/Ingredients/0">
                  <button className="button" >Assiettes de crudité</button>
                </Link>
                <button className="boisson" onClick={() => navigate('/Order/Ingredients')}>Expresso</button>
                <button className="dessert" onClick={() => navigate('/Order/Ingredients')}> Macaron</button><br/>
                <Link to="/Order/Ingredients/1">
                  <button className="button">Méli-mélo de crudités</button>
                </Link>
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
