import React from "react";
import "./App.css";
import { useState } from "react";
import ingrédients from "./ingrédients.json";


function Ingredients(props) {
    const id = props.id;
    const [count, setCount] = useState(0);


  return (
    <>
    <div id="ingredients">    
        <div >
          <h2>{ingrédients && ingrédients[id].title}</h2>
          <h3>Ingredients</h3>
          <p>{ingrédients && ingrédients[id].salade_deux}</p>
          <img src={ingrédients && ingrédients[id].photo} alt="Salade Image" />
        </div>
    </div>
      <div id="Order">
        <button className="button" onClick={() => setCount(count + 5)}>Commander</button>
      </div>
      <div id="invoice">
        <h3>Montant: {count}</h3>
      </div>
    </>
  );
}

export default Ingredients;
