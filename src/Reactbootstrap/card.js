import React from 'react';
import NavScrollExample from './navbar';
import Footer from './footer';


const Menu = (props) => {
  const { menu } = props;

  return (
   <>
    <div id='nav'>
        <NavScrollExample/>
    </div>
    <div id='menu'>
      <h3>Menu de salades</h3>
    </div>
    <div>  
    {menu.map((item) => (
          <h5 key={item.id}>
            <img className='pictures' src={item.image} alt={item.name} /><br/>
            {item.name} : {item.price}€
          </h5>
        ))}
      
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
}

export default Menu;
