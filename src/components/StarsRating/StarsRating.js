import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AiOutlineStar } from "react-icons/ai";
import {colorMorado} from '../../assets/constants';

const StarsRating = ({rateExp,setRateExp}) => {
    const [rating, setRating] = useState(rateExp);
  const handleCalif = (rate) => {
    //console.log("Calificación:..", rate);
    setRating(rate);
  };
  useEffect(()=>{
    if(rating!==0){
        setRateExp(rating)
        
    }
    
  },[rating])
  useEffect(()=>{
    if(rateExp===0){
        setRating(0)
    }
  },[rateExp])

  return (
    <FloatingLabel
      controlId="floatingTextarea2"
      label="Califica tu experiencia"
      className="my-3 border rounded"
    >
      <div
        style={{ height: "70px" }}
        className="d-flex mt-4 p-2 justify-content-center align-items-center"
      >
        <AiOutlineStar
          onClick={() => handleCalif(1)}
          style={{ fontSize: "25px", color: rating>0?`${colorMorado}`:'inherit' }}
        />
        <AiOutlineStar
          onClick={() => handleCalif(2)}
          style={{ fontSize: "25px", color: rating>1?`${colorMorado}`:'inherit' }}
        />
        <AiOutlineStar
          onClick={() => handleCalif(3)}
          style={{ fontSize: "25px", color: rating>2?`${colorMorado}`:'inherit' }}
        />
        <AiOutlineStar
          onClick={() => handleCalif(4)}
          style={{ fontSize: "25px", color: rating>3?`${colorMorado}`:'inherit' }}
        />
        <AiOutlineStar
          onClick={() => handleCalif(5)}
          style={{ fontSize: "25px", color: rating>4?`${colorMorado}`:'inherit'  }}
        />
      </div>
    </FloatingLabel>
  );
};

export default StarsRating;
