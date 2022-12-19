import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home  from './components/home';
import Order from './components/services/services/order';
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
      
        <div id='User'>
          <h3>Order ID:434.95451332890076</h3>
          <h3>username:${username}</h3>
        </div>
        
        <form className='form'>
        <input type='text' placeholder='Username ' value={username} onChange = {e => setusername(e.target.value)} /> 
        <button  onClick={()=> navigate('/Order')}>Start my order</button>

      </form>
    </>
  )

}


export default App;
