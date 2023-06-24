import React from 'react'
import { ubiHospitalMorelos } from '../../assets/constants'
import {GrLocation} from 'react-icons/gr'
import { colorMorado } from '../../assets/constants'

const Footer = () => {
  return (
    <div>
      <a style={{color:`inherit`,textDecoration:'none'}} 
      className='d-flex justify-content-center align-items-center gap-2 bg-light p-2'
      href={ubiHospitalMorelos}>
      <GrLocation />
      <span style={{fontSize:'2vw'}}>
      C. de la Luz 44, Fraccionamiento Villas Chapultepec, Chapultepec, 62450 Cuernavaca, Mor.
      </span>
      </a>
      </div>
  )
}

export default Footer