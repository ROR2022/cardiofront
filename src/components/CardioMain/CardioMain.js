import React from 'react'
//import { mainLogo } from '../../assets/constants'
import cardioLogo from '../../assets/images/logoCardio1.png';
import { colorMorado, colorRosa } from '../../assets/constants';

const CardioMain = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        <img style={{width:'50vw'}} src={cardioLogo} alt="mainLogo" />
        <h1 style={{fontSize:'5vw', color:`${colorRosa}`}}>Dra. Martha Iris Ocampo Rodríguez</h1>
        <h2 style={{fontSize:'3vw', color:`${colorMorado}50`}}>Médico Pediatra/Intensivista</h2>
    </div>
  )
}

export default CardioMain