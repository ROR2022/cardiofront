import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect } from 'react';
//import Button from 'react-bootstrap/Button';
import CardioOffcanvas from './CardioOffcanvas';
import cardioLogo from '../../assets/images/logoCardio1.png'
import {BiMenu} from 'react-icons/bi';
import { colorMorado } from '../../assets/constants';

const CardioNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  const  downloadApp= async()=> {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

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
              {isReadyForInstall && <button className='btn btn-outline-danger' onClick={downloadApp}> Instalar </button>}
            <span className='btn btn-outline-info'> 
      <BiMenu  onClick={toggleOffcanvas} style={{color:`${colorMorado}`, fontSize:'25px'}}/>
      </span>
          <CardioOffcanvas showOffcanvas={showOffcanvas} toggleOffcanvas={toggleOffcanvas}/>
            
          </Container>
        </Navbar>
      );
}

export default CardioNavbar