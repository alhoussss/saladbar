import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Ingredients from './Order.js';
import Recap from "./recap.js";
import CarouselFadeExample from './Reactbootstrap/reactbootstrap';
import NavScrollExample from './Reactbootstrap/navbar';
import CreateUser from './Reactbootstrap/User';
import Footer from './Reactbootstrap/footer';
import Button from 'react-bootstrap/Button';


function App() {
  let navigate = useNavigate();
  return (
    <>
      <div className="App">
      <header>
        <h1 className='name'> SaladBar </h1>
      </header>
    </div>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/CreateUser' element={<CreateUser/>}/>
      <Route path="/Order" element={<Order/>} />
      <Route path="/CreateUser/Order" element={<Order/>} />
      <Route path='/CreateUser/Order/Ingredients' element={<Ingredients/>}/>
      <Route path='/CreateUser/Order/Ingredients/Recap' element={<Recap/>}/>
      
    </Routes>
  
    </>

  );
}

function Form(){

 
  return(
    <>
      <div>
        
        <NavScrollExample/>
      </div>
        <div >

          <CarouselFadeExample/>

        </div>
        
        <div id='footer'>

          <Footer/>

        </div>

    </>
  )

}



function Order(handlechange){
  const { username } = handlechange;
  let navigate = useNavigate();
  return(
      <>
      <NavScrollExample/>
          <div id="Order">
              <form >
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Assiettes de crudité</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Expresso</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/Order/Ingredients')}> Macaron</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Méli-mélo de crudités</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Chocolat</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Île flottante</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Panaché de crudités</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Capuccino</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/Order/Ingredients')}>mille-feuille</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Crudités Bulgare</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Ice-Thea</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Tarte au citron</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Salade Arc-en-ciel</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/Order/Ingredients')}>Jus d'orange</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/Order/Ingredients')}>crème brûlée</Button>
              </form>
          </div>
          <Footer/>
      </>

  );
}
export default App;