import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import NavScrollExample from './navbar';
import Footer from './footer';



const MapContainer = (props) => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({});

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        setCoordinates({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
      } else {
        console.error(`Geocode was not successful for the following reason: ${status}`);
      }
    });
  };
  

  

  return (
    <>
    <div id='nav'>
        <NavScrollExample/>
    </div>
    <div id="Card">
      <form onSubmit={handleSubmit}>
        <label>
          Adresse :
          <input type="text" value={address} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <Map id="Card"
        google={props.google}
        zoom={8}
        style={{ width: '100%', height: '400px' }}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        {Object.keys(coordinates).length !== 0 && (
          <Marker position={coordinates} />
        )}
      </Map>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAfvGH5h9Ec_q3UE5-CikW8HIdFypMAZ8Y",
})(MapContainer);
