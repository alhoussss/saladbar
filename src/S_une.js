import React from "react";
import "./App.css";
import { useState } from "react";
import ingredients from "./ingredients.json";
import {useNavigate } from "react-router-dom";



function Ingredients() {
  const [count, setCount] = useState(ingredients[0].Prix_salade)
  const [cart, setCart] = useState([]);
  // fonction pour naviguer vers une autre route
  let navigate = useNavigate()
  // fonction pour retirer un ingrédient du panier
  const removeFromCart = index => {
    setCart(cart.filter((_, i) => i !== index));
  }
  // fonction pour ajouter un ingrédient au panier
  const addToCart = ingredient => {
    setCart([...cart, ingredient]);
  }
  // fonction pour gérer le clic sur un bouton
  const handleClick = event => {
    console.log(event.target.name);
    // autres actions
  }

  return (
    <>
    <div id="ingredients">    
        <div >
          <h2>{ingredients && ingredients[0].title}</h2>
          <h3>Ingredients</h3>
          <p>{ingredients && ingredients[0].ingredients}</p>
          <img src={ingredients && ingredients[0].photo} alt="Salade Image" />
        </div>
    </div>
      <div id="Order">
      <h3>Ajoutez des ingredients supplementaire:</h3>
      <button className="ingre" name="comcombre" onClick={() => {addToCart(ingredients[0]["ingredient"][0]);setCount(count + parseInt(ingredients[0]["Prix_ingre"]["tomates"]))}}>comcombre</button>
      <button className="ingre" name="tomates" onClick={() => {addToCart(ingredients[0]["ingredient"][1]);setCount(count + parseInt(ingredients[0]["Prix_ingre"]["tomates"]))}}>tomates</button>
      <button className="ingre" name="maïs" onClick={() => {addToCart(ingredients[0]["ingredient"][2]);setCount(count + parseInt(ingredients[0]["Prix_ingre"]["tomates"]))}}>maïs</button>
      <button className="ingre" name="vinaigrette" onClick={() => {addToCart(ingredients[0]["ingredient"][3]);setCount(count + parseInt(ingredients[0]["Prix_ingre"]["tomates"]))}}>vinaigrette</button>
      </div>

      <div id="Order">
        <h3>Ingredients supplementaire:</h3>
        {cart.map((ingredient, index) => (
          <div key={ingredient.id}>
            <p>{ ingredients[0]["ingredient"][1]+" "+ingredients[0]["Prix_ingre"]["tomates"]}€ <button className="delete" onClick={() =>{removeFromCart(index);setCount(count - ingredients[0]["Prix_ingre"]["tomates"] )}}>Supprimer</button></p>
      </div>
  ))}
</div>

      <div id="invoice">
        <h3>Montant: {count}€</h3>
      </div>
      <div id="invoice">
        <button className="order"> Poursuivre votre commande</button>
        <button className="order" onClick={() => navigate('/Order/Ingredients/Recap')}> Finaliser votre commande >></button>
      </div>
    </>
  );
}

export default Ingredients;