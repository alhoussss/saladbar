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
import Order from './Order/Order.js';
import Carte from './Reactbootstrap/Carte';
import MapContainer from './Reactbootstrap/map.js';
import NavScroll from './Reactbootstrap/connection';
import Order_un from './Order/Order_un';
import Order_deux from './Order/Order_deux';
import Order_trois from './Order/Order_trois';
import Order_quatre from './Order/Order_quatre';
import Order_cinq from './Order/Order_cinq';
import Order_six from './Order/Order_six';
import Order_sept from './Order/Order_sept';
import Order_huit from './Order/Order_huit';
import Order_neuf from './Order/Order_neuf';
import Order_dix from './Order/Order_dix';
import Order_onze from './Order/Order_onze';
import Order_douze from './Order/Order_douze';
import Order_treize from './Order/Order_treize';
import Order_quatorze from './Order/Order_quatorze';




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
      <Route path='/CreateUser/MenuCard/Order_un' element={<Order_un/>}/>
      <Route path='/CreateUser/MenuCard/Order_deux' element={<Order_deux/>}/>
      <Route path='/CreateUser/MenuCard/Order_trois' element={<Order_trois/>}/>
      <Route path='/CreateUser/MenuCard/Order_quatre' element={<Order_quatre/>}/>
      <Route path='/CreateUser/MenuCard/Order_cinq' element={<Order_cinq/>}/>
      <Route path='/CreateUser/MenuCard/Order_six' element={<Order_six/>}/>
      <Route path='/CreateUser/MenuCard/Order_sept' element={<Order_sept/>}/>
      <Route path='/CreateUser/MenuCard/Order_huit' element={<Order_huit/>}/>
      <Route path='/CreateUser/MenuCard/Order_neuf' element={<Order_neuf/>}/>
      <Route path='/CreateUser/MenuCard/Order_dix' element={<Order_dix/>}/>
      <Route path='/CreateUser/MenuCard/Order_onze' element={<Order_onze/>}/>
      <Route path='/CreateUser/MenuCard/Order_douze' element={<Order_douze/>}/>
      <Route path='/CreateUser/MenuCard/Order_treize' element={<Order_treize/>}/>
      <Route path='/CreateUser/MenuCard/Order_quatorze' element={<Order_quatorze/>}/>
      <Route path='/CreateUser/MenuCard/Order_un/Recap' element={<Recap/>}/>
      
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
        <NavScrollExample/>
      </div>
      
          <div id="Card">
              <form >
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order')}>Assiettes de crudité</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order_cinq')}>Expresso</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order_dix')}> Macaron</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order_un')}>Méli-mélo de crudités</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order_six')}>Chocolat</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order_onze')}>Île flottante</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order_deux')}>Panaché de crudités</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order_sept')}>Capuccino</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order_douze')}>mille-feuille</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order_trois')}>Crudités Bulgare</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order_huit')}>Ice-Thea</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order_treize')}>Tarte au citron</Button><br/>
                <Button variant="outline-success" className="button" onClick={() => navigate('/CreateUser/MenuCard/Order_quatre')}>Salade Arc-en-ciel</Button>
                <Button variant="outline-success" className="boisson" onClick={() => navigate('/CreateUser/MenuCard/Order_neuf')}>Jus d'orange</Button>
                <Button variant="outline-success" className="dessert" onClick={() => navigate('/CreateUser/MenuCard/Order_quatorze')}>crème brûlée</Button>
              </form>
          </div>
          <div>
            <Footer/>
          </div>
          
      </>

  );
}
export default App;