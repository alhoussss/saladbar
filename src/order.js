import React from "react";
import Prices from './App.js';

export default function Order(){
    return(
        <>
            <div id="User">
            <h3>Order ID:434.95451332890076</h3>
            <h3>username:</h3>
            </div>
            <div id="Order">
                <form >
                    <button className="button" onClick={Prices}>Assiettes de crudité</button>
                    <button className="boisson" onClick={Prices}>Expresso</button>
                    <button className="dessert" onClick={Prices}> Macaron</button><br/>
                    <button className="button" onClick={Prices}>Méli-mélo de crudités</button>
                    <button className="boisson" onClick={Prices}>Chocolat</button>
                    <button className="dessert" onClick={Prices}>Île flottante</button><br/>
                    <button className="button" onClick={Prices}>Panaché de crudités</button>
                    <button className="boisson" onClick={Prices}>Capuccino</button>
                    <button className="dessert" onClick={Prices}>mille-feuille</button><br/>
                    <button className="button" onClick={Prices}>Crudités Bulgare</button>
                    <button className="boisson" onClick={Prices}>Ice-Thea</button>
                    <button className="dessert" onClick={Prices}>Tarte au citron</button><br/>
                    <button className="button" onClick={Prices}>Salade Arc-en-ciel</button>
                    <button className="boisson" onClick={Prices}>Jus d'orange</button>
                    <button className="dessert" onClick={Prices}>crème brûlée</button>
                </form>
            </div>
            <div id="invoice">
                <h3>Montant:{Prices}</h3>

            </div>
        </>

    )
}