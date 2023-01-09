import React from "react";
import "../App.css";
import { useState } from "react";
import ingredients from "../ingredients.json";
import {useNavigate } from "react-router-dom";
import NavScrollExample from "../Reactbootstrap/navbar";
import Footer from "../Reactbootstrap/footer";
import { Button } from "react-bootstrap";


function Order_dix() {
  const [count, setCount] = useState(ingredients[10].Prix_salade)
  const [cart, setCart] = useState([]);
  //const [result, setResult] = useState('');

  // fonction pour naviguer vers une autre route
  let navigate = useNavigate()
  // fonction pour retirer un ingrédient du panier
  const removeFromCart = index => {
    setCart(cart.filter((_, i) => i !== index));
  }
  // fonction pour gérer le clic sur un bouton
  /*const handleClick = () => {
    setResult(`${ingredients[0]["ingredient"][0]}; ${ingredients[0]["ingredient"][1]}; ${ingredients[0]["ingredient"][2]}; ${ingredients[0]["ingredient"][3]}`);
  };*/
  
  // Reset ma liste
function resetTodoList() {
  setCart([]);
}

  return (
    <>
    <div id="nav">
      <NavScrollExample/>
    </div>
    <div id="nav">
      <div id="ingredients">    
        <div >
          <h2>{ingredients && ingredients[10].title}</h2>
          <img src={ingredients && ingredients[10].photo} alt="Salade" className="pictures" />
        </div>
      </div>
      <div id="Order">
      <Button variant="outline-success" className="ingre" name="comcombre" onClick={() => setCount(count + ingredients[10].Prix_salade)}> + 1</Button>
      <Button variant="outline-success" className="ingre" name="comcombre" onClick={() => setCount(count - ingredients[10].Prix_salade)}> - 1</Button>
        {cart.map((ingredient, index) => (
          <div key={ingredient.id}>
            <p>{ ingredient + "  "}{ ingredients[0]["Prix_ingre"]["tomates"]}€ <Button variant="outline-success" className="delete" onClick={async () => { await removeFromCart(index);await setCount(count - ingredients[0]["Prix_ingre"]["tomates"]);}}>Supprimer</Button></p>
      </div>
        ))}
      </div>

      <div id="invoice">
        <h3>Montant: {count}€</h3>
      </div>
      <div id="invoice">
        <Button variant="outline-success" className="order" onClick={() => navigate('/CreateUser/MenuCard')}> Poursuivre votre commande</Button>
        <Button variant="outline-success" className="order" onClick={() => {resetTodoList();setCount(ingredients[10]["Prix_salade"])}} > Reset</Button>
        <Button variant="outline-success" className="order" onClick={() => navigate('/CreateUser/MenuCard/Order/Recap')}> Finaliser votre commande >></Button>
      </div>
      </div>
        <Footer/>
    </>
  );
}

export default Order_dix;