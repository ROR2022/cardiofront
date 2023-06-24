import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
//import {FaLocationArrow} from 'react-icons/fa';
import { BiLocationPlus } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
//import {BiMenu} from 'react-icons/bi';
import cardioLogo from '../../assets/images/logoCardio1.png'
import { colorRosa, colorMorado, ubiHospitalMorelos } from "../../assets/constants";
import './CardioNavbar.css';

const CardioOffcanvas = ({ showOffcanvas, toggleOffcanvas }) => {
  return (
    <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
        <img width={'50px'} src={cardioLogo} className='rounded' alt="cardioLogo" />
              Pediatra
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column gap-3 bg-light">
        
          <a href="https://mailto:ilosiri5445@gmail.com" className="d-flex justify-ccntent-start gap-2 rounded align-items-center ps-2 py-2 invierteColoresNavbar">
          <FiMail style={{ color:'inherit', fontSize: "30px" }} className="fw-bolde" />
          <span style={{ color:'inherit', fontSize: "18px", fontFamily:'sans-serif' }} className="fw-bolder">
            Correo: ilosiri5445@gmail.com
          </span>
          </a>

          <a href="https://hospitalmorelos.com/" className="d-flex justify-ccntent-start gap-2 rounded align-items-center ps-2 py-2 invierteColoresNavbar">
          <FaPlus style={{ color: `inherit`, fontSize: "30px" }} className="fw-bolder" />
          <span style={{ color: `inherit`, fontSize: "18px", fontFamily:'sans-serif' }} className="fw-bolder">
            Consultorio: Hospital Morelos
          </span>
          </a>

          <a href={ubiHospitalMorelos} className="d-flex justify-ccntent-start gap-2 rounded align-items-center ps-2 py-2 invierteColoresNavbar">
          <BiLocationPlus style={{ color: `inherit`, fontSize: "30px" }} className="fw-bolder" />
          <span style={{ color: `inherit`, fontSize: "18px", fontFamily:'sans-serif' }} className="fw-bolder">
            Ubicación
          </span>
          </a>
          <a href='tel:+527773152014' className="d-flex justify-ccntent-start gap-2 rounded align-items-center ps-2 py-2 invierteColoresNavbar">
          <BsTelephone style={{ color: `inherit`, fontSize: "30px" }} className="fw-bolder" />
          <span style={{ color: `inherit`, fontSize: "18px", fontFamily:'sans-serif' }} className="fw-bolder">
            7773152014
          </span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5212481569807&text=%C2%A1Hola%20me%20gustar%C3%ADa%20hacer%20una%20cita!" className="d-flex justify-ccntent-start gap-2 rounded align-items-center ps-2 py-2 invierteColoresNavbar">
          <BsWhatsapp style={{ color: `inherit`, fontSize: "30px" }} className="fw-bolder" />
          <span style={{ color: `inherit`, fontSize: "18px", fontFamily:'sans-serif' }} className="fw-bolder">
            2481569807
          </span>
          </a>
        <span>
          <h1 style={{fontSize:'17px', color:`${colorRosa}`}} className="text-center ">Dra. Martha Iris Ocampo Rodríguez</h1>
        <h2 style={{fontSize:'12px', color:`${colorMorado}50`}} className="text-center ">Médico Pediatra/Intensivista</h2>
        </span>
        
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CardioOffcanvas;
