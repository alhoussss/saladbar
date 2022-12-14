import React from "react";
import { useState } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import NavScrollExample from "./navbar";
import Footer from "./footer";




const CreateUser = () => {
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données au serveur ou faire une action avec les données du formulaire
  };

  return (
    <>
    <div id="nav">
      <NavScrollExample/>
    </div>
    <div id="nav">
    <form onSubmit={handleSubmit} className='form'>
      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          className="form-control"
          style={{ width: '60%' }}
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          title="Veuillez remplir ce champ" // Ajout de la propriété title
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          className="form-control"
          style={{ width: '60%' }}
          id="firstname"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
          required
          title="Veuillez remplir ce champ" // Ajout de la propriété title
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          type="text"
          className="form-control"
          style={{ width: '60%' }}
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          title="Veuillez remplir ce champ" // Ajout de la propriété title
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Adresse email</label>
        <input
          type="email"
          className="form-control"
          style={{ width: '60%' }}
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          title="Veuillez remplir ce champ" // Ajout de la propriété title
        />
      </div>
      <Button variant="outline-success" className='ord' onClick={() =>navigate('/CreateUser/MenuCard')}>Start my order</Button>
    </form>
    </div>
    <Footer/>
    </>
  );
};

export default CreateUser;
