import React from "react";
import displayPrice from './App.js';
import username from './App.js';

export default function Order(){
    return(
        <>
            <div id="User">
            <h3>Order ID:434.95451332890076</h3>
            <h3>username:{username}</h3>
            </div>
            <div id="Order">
                <form >
                    <button className="button" onClick={displayPrice}>Assiettes de crudité</button>
                    <button className="boisson" onClick={displayPrice}>Expresso</button>
                    <button className="dessert" onClick={displayPrice}> Macaron</button><br/>
                    <button className="button" onClick={displayPrice}>Méli-mélo de crudités</button>
                    <button className="boisson" onClick={displayPrice}>Chocolat</button>
                    <button className="dessert" onClick={displayPrice}>Île flottante</button><br/>
                    <button className="button" onClick={displayPrice}>Panaché de crudités</button>
                    <button className="boisson" onClick={displayPrice}>Capuccino</button>
                    <button className="dessert" onClick={displayPrice}>mille-feuille</button><br/>
                    <button className="button" onClick={displayPrice}>Crudités Bulgare</button>
                    <button className="boisson" onClick={displayPrice}>Ice-Thea</button>
                    <button className="dessert" onClick={displayPrice}>Tarte au citron</button><br/>
                    <button className="button" onClick={displayPrice}>Salade Arc-en-ciel</button>
                    <button className="boisson" onClick={displayPrice}>Jus d'orange</button>
                    <button className="dessert" onClick={displayPrice}>crème brûlée</button>
                </form>
            </div>
            <div id="invoice">
                <h3>Montant:{displayPrice}</h3>

            </div>
        </>

    )
}