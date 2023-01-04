import './App.css';
import { Route, Routes } from "react-router-dom";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Recap from "./recap.js";
import CarouselFadeExample from './Reactbootstrap/reactbootstrap';
import NavScrollExample from './Reactbootstrap/navbar';
import CreateUser from './Reactbootstrap/User';
import Footer from './Reactbootstrap/footer';
import Button from 'react-bootstrap/Button';
import Order from './Order.js';
import Carte from './Reactbootstrap/Carte';
import MapContainer from './Reactbootstrap/map.js';
import NavScroll from './Reactbootstrap/connection';



function App() {
  return (
    <>
      <div className="App">
    </div>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/Livraison' element={<MapContainer/>}/>
      <Route path='/Card' element={<Carte/>}/>
      <Route path='/CreateUser' element={<CreateUser/>}/>
      <Route path="/MenuCard" element={<MenuCard/>} />
      <Route path="/CreateUser/MenuCard" element={<MenuCard/>} />
      <Route path='/CreateUser/MenuCard/Order' element={<Order/>}/>
      <Route path='/CreateUser/MenuCard/Order/Recap' element={<Recap/>}/>
      
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



function MenuCard(handlechange){
  let navigate = useNavigate();
  return(
      <>
      <div id='nav'>
          <NavScroll/>
      </div>
      
          <div id="Card">
              <form >
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Assiettes de crudité</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Expresso</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order')}> Macaron</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Méli-mélo de crudités</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Chocolat</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Île flottante</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Panaché de crudités</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Capuccino</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order')}>mille-feuille</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Crudités Bulgare</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Ice-Thea</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Tarte au citron</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Salade Arc-en-ciel</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Jus d'orange</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order')}>crème brûlée</Button>
              </form>
          </div>
          <div>
            <Footer/>
          </div>
          
      </>

  );
}
export default App;