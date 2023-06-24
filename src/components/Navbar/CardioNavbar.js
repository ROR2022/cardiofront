import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import CardioOffcanvas from './CardioOffcanvas';
import cardioLogo from '../../assets/images/logoCardio1.png'
import {BiMenu} from 'react-icons/bi';
import { colorMorado } from '../../assets/constants';

const CardioNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = ()=>{
    setShowOffcanvas(prev=>!prev);
  }
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/" className='d-flex gap-2'>
              <img width={'50px'} src={cardioLogo} className='rounded' alt="cardioLogo" />
              Pediatra
              </Navbar.Brand>
            
            <span className='btn btn-outline-info'> 
      <BiMenu  onClick={toggleOffcanvas} style={{color:`${colorMorado}`, fontSize:'25px'}}/>
      </span>
          <CardioOffcanvas showOffcanvas={showOffcanvas} toggleOffcanvas={toggleOffcanvas}/>
            
          </Container>
        </Navbar>
      );
}

export default CardioNavbar