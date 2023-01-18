import React from "react";
import "./App.css";
import NavScrollExample from "./Reactbootstrap/navbar";
import Footer from "./Reactbootstrap/footer";
import  MyContext  from './Order/Order';
import { useContext } from "react";

function Recap(){
    let randomID = Math.floor(Math.random() * 100000);
    const [count, setCount,cart,setCart] = useContext(MyContext);
    return(
      <>
      <div id="nav">
        <NavScrollExample/>
      </div>
      
        <div id="recap">
            <h1>N°{randomID}</h1>
            <h2>Produits:{cart}</h2>  <h2>{Date}</h2>
            <h3> from Ingredients</h3>
            <h1>Prix:{count}</h1>
        </div>
        <Footer/>
      </>
    )
  }
  export default Recap;