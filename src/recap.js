import React from "react";
import "./App.css";
import NavScrollExample from "./Reactbootstrap/navbar";
import Footer from "./Reactbootstrap/footer";

function Recap(){
    let randomID = Math.floor(Math.random() * 100000);
    return(
      <>
      <div id="nav">
        <NavScrollExample/>
      </div>
      
        <div id="recap">
            <h1>N°{randomID}</h1>
            <h2>Produits:</h2>  <h2>{Date}</h2>
            <h3> from Ingredients</h3>
            <h1>Prix:</h1>
        </div>
        <Footer/>
      </>
    )
  }
  export default Recap;