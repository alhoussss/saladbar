import React from "react";
import "./App.css";
import { useState } from "react";
import ingredients from "./ingredients.json";
import {useNavigate } from "react-router-dom";



function S_deux() {
  const [count, setCount] = useState(ingredients[1].Prix_salade)
  const [cart, setCart] = useState([]);
  let navigate = useNavigate()
  const removeFromCart = index => {
    setCart(cart.filter((_, i) => i !== index));
  }
  
  const addToCart = ingredient => {
    setCart([...cart, ingredient]);
  }
  

  return (
    <>
    <div id="ingredients">    
        <div >
          <h2>{ingredients && ingredients[1].title}</h2>
          <h3>Ingredients</h3>
          <p>{ingredients && ingredients[1].ingredients}</p>
          <img src={ingredients && ingredients[1].photo} alt="Salade Image" />
        </div>
    </div>
      <div id="Order">
      <h3>Ajoutez des ingredients supplementaire:</h3>
      <button className="ingre" onClick={() => {addToCart(ingredients[1]["ingredients"][1]);setCount(count + parseInt(ingredients["Prix_ingre"]["tomates"]))}}>carottes râpées</button>
      <button className="ingre" onClick={() => {addToCart(ingredients[1]["ingredients"][1]);setCount(count + parseInt(ingredients["Prix_ingre"]["tomates"]))}}>tomates</button>
      <button className="ingre" onClick={() => {addToCart(ingredients[1]["ingredients"][1]);setCount(count + parseInt(ingredients["Prix_ingre"]["tomates"]))}}>maïs</button>
      <button className="ingre" onClick={() => {addToCart(ingredients[1]["ingredients"][1]);setCount(count + parseInt(ingredients["Prix_ingre"]["tomates"]))}}>vinaigrette</button>
      </div>

      <div id="Order">
        <h3>Ingredients supplementaire:</h3>
        {cart.map((ingredient, index) => (
          <div key={ingredient.id}>
            <p>{ ingredients["ingredients"][1]+" "+ingredients["Prix_ingre"]["tomates"]}€ <button className="delete" onClick={() =>{removeFromCart(index);setCount(count - ingredients["Prix_ingre"]["tomates"] )}}>Supprimer</button></p>
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

export default S_deux;