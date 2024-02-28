import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({
  catData,
  setCatData,
  dogData,
  setDogData,
  setHome,
  setForm,
  setDog,
  setCat,
  img,
  setImg,
  inputName,
  setInputName,
  value,
  setValue,
}) => {
  const handlechange = (e) => {
    setInputName(e.target.value);
  };
  const handleselect = (e) => {
    setValue(e.target.value);
  };
  console.log(value);

  const handlebutton = (e) => {
    e.preventDefault();

    if (value === "1") {
      let arr = [...dogData];
      arr.push({
        id: inputName,
        url: img,
      });
      setHome(true);
      setDog(true);
      setForm(false);

      setDogData(arr);
    } else {
      let arr1 = [...catData];

      arr1.push({
        id: inputName,
        url: img,
      });
      setHome(true);
      setCat(true);
      setForm(false);

      setCatData(arr1);
    }

    // let arr = [...catData];

    // arr.push({
    //   id: inputName,
    //   url: img,
    // });

    // setCatData(arr);
  };

  console.log(catData);

  return (
    <form className="form_div">
      <select className="select" onChange={handleselect} defaultValue="1">
        <option value="">----selec----</option>
        <option value="1" e>
          Dog
        </option>
        <option value="2">Cat</option>
      </select>
      <p>
        <input
          className="input"
          type="text"
          onChange={handlechange}
          value={inputName}
          placeholder="Animals Name or Id......"
        />
      </p>
      <input
        type="file"
        className="file"
        onChange={(e) => setImg(e.target.value)}
      />

      <p>
        <button onClick={handlebutton}>click</button>
      </p>
    </form>
  );
};

export default Form;
