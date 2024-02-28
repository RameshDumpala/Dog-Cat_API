import React, { useEffect, useState } from "react";
 import DogButton from "./DogButton"
import "./Dog.css";

const DogComponent = ({ setAddDog, addDog, dogData }) => {

  
  return (
    <div className="Cat_div">
      {dogData.map((item) => (
        <div className="map_div">
          <img className="img" src={item.url} />
          <p>{item.id}</p>
         <DogButton item={item} setAddDog={setAddDog} addDog={addDog} />
           
        </div>
      ))}
    </div>
  );
};

export default DogComponent;
