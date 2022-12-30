import React, { useState, useEffect } from 'react';
import ingredients from "./ingredients.json";


function Data() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // chargement du fichier JSON
    fetch('./ingredients.json')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  // fonction pour récupérer les données par identifiant
  function getDataById(1) {
    // boucle sur tous les éléments du fichier JSON
    for (var i = 0; i < ingredients.length; i++) {
      // si l'identifiant correspond à celui recherché, on retourne l'élément
      if (ingredients[i].id == id) {
        return ingredients[i];
      }
    }

    // si aucun élément n'a été trouvé, on retourne null
    return null;
  }}
  export default Data;