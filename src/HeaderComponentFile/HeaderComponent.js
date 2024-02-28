import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import About from "../about/About";
import Form from "../FormComponent/Form";
import FavouritesCat from "../Favourites/FavouritesCat";
import FavouritesDog from "../Favourites/FavouritesDog";
import DogComponent from "../AnimalsComponent/DogComponent";
import CatComponent from "../AnimalsComponent/CatComponent";

const HeaderComponent = () => {
  const [home, setHome] = useState(true);
  const [Favourite, setFavourite] = useState(false);
  const [form, setForm] = useState(false);
  const [FavouriteCat, setFavouriteCat] = useState(false);
  const [FavouriteDog, setFavouriteDog] = useState(false);
  const [about, setAbout] = useState(false);
  const [dog, setDog] = useState(true);
  const [cat, setCat] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = ([]);

  const [img, setImg] = useState();
  const [inputName, setInputName] = useState();
  const [value, setValue] = useState();

  const [addCat, setAddCat] = useState([]);
  const [addDog, setAddDog] = useState([]);

  const [catData, setCatData] = useState([]);
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => setCatData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/images/search?limit=10")
      .then((res) => setDogData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlehome = () => {
    setHome(true);
    setDog(true);
    setAbout(false);
    setFavourite(false);
    setFavouriteCat(false);
    setFavouriteDog(false);
    setForm(false);
  };
  const handleabout = () => {
    setAbout(true);
    setHome(false);
    setCat(false);
    setDog(false);
    setFavourite(false);
    setForm(false);
  };
  const handleFavourite = () => {
    setFavourite(true);
    setFavouriteDog(true);
    setHome(false);
    setAbout(false);
    setCat(false);
    setDog(false);
    setForm(false);
    setEdit(false);
  };
  const handleform = () => {
    setForm(true);
    setAbout(false);
    setFavourite(false);
    setHome(false);
    setFavouriteCat(false);
    setFavouriteDog(false);
    setDog(false);
    setCat(false);
  };
  const handledog = () => {
    setDog(true);
    setCat(false);
  };
  const handlecat = () => {
    setCat(true);
    setDog(false);
  };
  const handlefavoritecat = () => {
    setFavouriteCat(true);
    setFavouriteDog(false);
    setEdit(false);
  };
  const handlefavoritedog = () => {
    setFavouriteDog(true);
    setFavouriteCat(false);
    setEdit(false);
  };
  // const handleedit=( )=>{
  //   setEdit(true)
  //   setForm(true);
  //   setFavourite(false);
  //   setFavouriteDog(false);
  //   setFavouriteCat(false);
  // }

  return (
    <div>
      <div className="header_div">
        <span onClick={handlehome}>
          {home && !Favourite && !form && !about ? (
            <span className="home">Home</span>
          ) : (
            <span>Home</span>
          )}
          {catData.length + dogData.length}
        </span>
        <span onClick={handleFavourite}>
          {!home && Favourite && !form && !about ? (
            <span className="Favourite">Favourite</span>
          ) : (
            <span>Favourite</span>
          )}
        </span>
        <span onClick={handleform}>
          {!home && !Favourite && form && !about ? (
            <span className="Form">Form</span>
          ) : (
            <span>Form</span>
          )}
        </span>
        <span onClick={handleabout}>
          {!home && !Favourite && !form && about ? (
            <span className="About">About</span>
          ) : (
            <span>About</span>
          )}
        </span>
      </div>

      <div className="dog_cat">
        {home ? (
          <button onClick={handledog}>
            {dog && !cat ? (
              <span className="dog_btn">Dog</span>
            ) : (
              <span>Dog</span>
            )}
          </button>
        ) : (
          ""
        )}
        {home ? (
          <button onClick={handlecat}>
            {!dog && cat ? (
              <span className="cat_btn">Cat</span>
            ) : (
              <span>Cat</span>
            )}
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="Favorite_dog">
        {Favourite ? (
          <button onClick={handlefavoritedog}>
            Dog<span className="number">{addDog.length}</span>
          </button>
        ) : (
          ""
        )}
        {Favourite ? (
          <button onClick={handlefavoritecat}>
            Cat<span className="catnumber">{addCat.length}</span>
            {/* {!FavouriteDog && FavouriteCat ? <span className="f_cat">Cat{addCat.length}</span> : <span>Cat</span> } */}
          </button>
        ) : (
          ""
        )}
      </div>
      {FavouriteCat ? (
        <FavouritesCat addCat={addCat} setAddCat={setAddCat} />
      ) : (
        ""
      )}
      {FavouriteDog ? (
        <FavouritesDog
          setFavouriteCat={setFavouriteCat}
          setFavouriteDog={setFavouriteDog}
          setEdit={setEdit}
          setFavourite={setFavourite}
          setForm={setForm}
          addDog={addDog}
          setAddDog={setAddDog}
          edit={edit}
          editData={editData}
          setEditData={setEditData}
         
        />
      ) : (
        ""
      )}

      {dog ? (
        <DogComponent addDog={addDog} setAddDog={setAddDog} dogData={dogData} />
      ) : (
        ""
      )}
      {cat ? (
        <CatComponent addCat={addCat} setAddCat={setAddCat} catData={catData} />
      ) : (
        ""
      )}
      {form && (
        <Form
          catData={catData}
          setCatData={setCatData}
          dogData={dogData}
          setDogData={setDogData}
          setHome={setHome}
          setForm={setForm}
          setDog={setDog}
          setCat={setCat}
          img={img}
          setImg={setImg}
          setInputName={setInputName}
          value={value}
          setValue={setValue}
          editData={editData}
        />
      )}
      {about ? <About /> : ""}
    </div>
  );
};

export default HeaderComponent;
