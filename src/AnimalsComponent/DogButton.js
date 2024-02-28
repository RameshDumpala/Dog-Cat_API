import React, { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
const DogButton = ({ item, addDog, setAddDog }) => {
  const [dogButton, setDogButton] = useState(false);
 

  const handlbutton = () => {
    setDogButton(true);
  };
  const handledog = (item) => {
    let arr = [...addDog];
    arr.push(item);
    setAddDog(arr);
  };
  return (
    <div className="button_div" onClick={handlbutton}>
      {dogButton ? (
        <AiTwotoneHeart className="icon" />
      ) : (
        <AiTwotoneHeart onClick={() => handledog(item)} />
      )}
      {dogButton ? "Favourites" : ""}

    </div>
  );
};

export default DogButton;
