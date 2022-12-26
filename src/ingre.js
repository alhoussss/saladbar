import React from "react";
import "./App.css";
import { useState } from "react";
import ingredients from "./ingredients.json";



function Ingredients() {
  const [count, setCount] = useState(ingredients[0].Prix_salade)
  const [cart, setCart] = useState([]);
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
          <h2>{ingredients && ingredients[0].title}</h2>
          <h3>Ingredients</h3>
          <p>{ingredients && ingredients[0].ingredients}</p>
          <img src={ingredients && ingredients[0].photo} alt="Salade Image" />
        </div>
    </div>
      <div id="Order">
      <h3>Ajoutez des ingredients supplementaire:</h3>
      <button className="ingre" onClick={() => {addToCart(ingredients[0]);setCount(count + parseInt(ingredients[0].Prix_ingredients))}}>carottes râpées</button>
      <button className="ingre" onClick={() => {addToCart(ingredients[0]);setCount(count + parseInt(ingredients[0].Prix_ingredients))}}>tomates</button>
      <button className="ingre" onClick={() => {addToCart(ingredients[0]);setCount(count + parseInt(ingredients[0].Prix_ingredients))}}>maïs</button>
      <button className="ingre" onClick={() => {addToCart(ingredients[0]);setCount(count + parseInt(ingredients[0].Prix_ingredients))}}>vinaigrette</button>
      </div>

      <div id="Order">
        <h3>Ingredients supplementaire:</h3>
        {cart.map((ingredient, index) => (
          <div key={ingredient.id}>
            <p>{ ingredient["une"][0]["element"]+" "+ingredients[0].Prix_ingredients}€ <button className="delete" onClick={() =>{removeFromCart(index);setCount(count - ingredients[0].Prix_ingredients )}}>Supprimer</button></p>
      </div>
  ))}
</div>

      <div id="invoice">
        <h3>Montant: {count}€</h3>
      </div>
    </>
  );
}
/*
function Price()
const [count, setCount] = useState(0);
{
return(
  <>
    <div id="Order">
        <button className="button" onClick={() => setCount(count + getProperty(ingredients,'Prix'))}>Commander</button>
      </div>
  </>
)
} */
export default Ingredients;