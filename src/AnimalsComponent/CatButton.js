import React, { useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai';

const CatButton = ({item,setAddCat,addCat}) => {
    const [clickButton,setClickButton]=useState(false)

    const handlebutton=()=>{
        setClickButton(true)
    }
    const handleadd = (item) => {
        addCat.push(item);
        setAddCat([...addCat]);
      };
  return (
    <div className='cat_div' onClick={handlebutton}> 
       {clickButton?<AiTwotoneHeart className='icon' />  : < AiTwotoneHeart onClick={()=>handleadd(item)} />} 
       {clickButton ? "Favourites" : ""}
    </div>
  )
}

export default CatButton