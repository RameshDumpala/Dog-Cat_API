import React from "react";
import "./Favourites.css";

const FavouritesCat = ({ addCat,setAddCat }) => {

  const handeldelete = (i) => {
    let arr = [...addCat];
    // const i = addDog.findIndex((item) => item.id === id);
    arr.splice(i, 1);
    setAddCat(arr);
  };

  return (
    <div className="favourites_animals">
      {addCat.map((items,i) => (
        <div className="map_div">
          <img className="img" src={items.url} alt="" />
          <p>{items.id}</p>
          <button onClick={()=>handeldelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FavouritesCat;
