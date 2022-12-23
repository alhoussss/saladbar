import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';



function App() {
  const [username, setusername] = useState("")

  return (
    <>

          <div className="App">
      <header>
        <h1 className='name'> SaladBar </h1>
      </header>
    </div>
    {username ? username > (<Username username = {Username} />): null }
    <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/Order" element={<Order/>} />
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
  const [count, setCount] = useState(0);
  return(
      <>
          <div id="User">
          <h3>Order ID:434.95451332890076</h3>
          <h3>username:</h3>
          </div>
          <div id="Order">
              <form >
                <button className="button" onClick={() => setCount(count + 5)}>Assiettes de crudité</button>
                <button className="boisson" onClick={() => setCount(count + 3)}>Expresso</button>
                <button className="dessert" onClick={() => setCount(count + 2)}> Macaron</button><br/>
                <button className="button" onClick={() => setCount(count + 22)}>Méli-mélo de crudités</button>
                <button className="boisson" onClick={() => setCount(count + 45)}>Chocolat</button>
                <button className="dessert" onClick={() => setCount(count + 55)}>Île flottante</button><br/>
                <button className="button" onClick={() => setCount(count + 54)}>Panaché de crudités</button>
                <button className="boisson" onClick={() => setCount(count + 15)}>Capuccino</button>
                <button className="dessert" onClick={() => setCount(count + 5)}>mille-feuille</button><br/>
                <button className="button" onClick={() => setCount(count + 985)}>Crudités Bulgare</button>
                <button className="boisson" onClick={() => setCount(count + 445)}>Ice-Thea</button>
                <button className="dessert" onClick={() => setCount(count + 445)}>Tarte au citron</button><br/>
                <button className="button" onClick={() => setCount(count + 5342)}>Salade Arc-en-ciel</button>
                <button className="boisson" onClick={() => setCount(count + 4555)}>Jus d'orange</button>
                <button className="dessert" onClick={() => setCount(count + 45565)}>crème brûlée</button>
              </form>
          </div>
          <div id="invoice">

              <h3>Montant:{count}</h3>

          </div>
      </>

  );
}
export default App;
