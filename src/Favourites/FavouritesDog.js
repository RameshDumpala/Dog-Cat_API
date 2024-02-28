import React,{useState} from "react";
import Form from "../FormComponent/Form"

const FavouritesDog = ({ addDog,setAddDog,edit,setFavouriteCat,setFavouriteDog,setEdit,setFavourite,setForm,editData,setEditData }) => {

 
  const handeldelete = (i) => {
    let arr = [...addDog];
    // const i = addDog.findIndex((item) => item.id === id);
    arr.splice(i, 1);
    setAddDog(arr);
  };
  const handleedit=(item)=>{
    setEdit(true)
    setForm(true);
    setFavourite(false);
    setFavouriteDog(false);
    setFavouriteCat(false);

    let arr = [...editData];
    // const i = addDog.findIndex((item) => item.id === id);
    arr.push(item);
    setEditData (arr);

  }


  return (
    <div className="favourites_animals">
      {addDog.map((item, i) => (
        <div className="map_div">
          <img className="img" src={item.url} alt="" />
          <p>{item.id}</p>
          <button onClick={()=>handleedit(item)}>Edit</button>
          <button disabled={addDog.length === 1} onClick={() => handeldelete(i)}>Delete</button>
       
        </div>
      ))}
      {edit?<Form addDog={addDog} setAddDog={setAddDog} />:""}
    </div>
  );
};

export default FavouritesDog;
