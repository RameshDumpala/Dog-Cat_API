import React, { useState } from "react";
 import CatButton from "./CatButton";
import "./Cat.css";

const CatComponent = ({ setAddCat, addCat, catData }) => {

  return (
    <div className="Cat_div">
      {catData.map((item) => (
        <div className="map_div">
          <img className="img" src={item.url} />
          <p>{item.id}</p>
          <CatButton item={item}addCat={addCat} setAddCat={setAddCat}  />
        </div>
      ))}
    </div>
  );
};

export default CatComponent;
