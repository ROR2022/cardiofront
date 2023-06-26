import Container from "react-bootstrap/Container";
//import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CardioOffcanvas from "./CardioOffcanvas";
import cardioLogo from "../../assets/images/logoCardio1.png";
import { BiMenu } from "react-icons/bi";
import { colorMorado } from "../../assets/constants";
import usePediatra from "../../hooks/usePediatra";
import useLoginGoogle from '../../hooks/useLoginGoogle';
import { loginUserPediatra } from "../../api/apiUser";

const CardioNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [dataUser,setDataUser,initialDataUser,dataLocalStorage,setDataLocalStorage] = usePediatra();
  const [isDoingLogin, setIsDoingLogin] = useState(false);
  const doLoginGoogle = useLoginGoogle();

  useEffect(()=>{
    if(isDoingLogin&&dataUser.email!==''){
      doRegisterUser();
    }
  },[dataUser,isDoingLogin])

  const doRegisterUser = async()=>{
    try {
      const result = await loginUserPediatra(dataUser);
      console.log('result:..',result)
      if(result){
        setIsDoingLogin(false);
        setDataLocalStorage({...result?.data?.dataUser})
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toggleOffcanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

  const handleLogin= ()=>{
    console.log('Hagiendo Login:..');
    doLoginGoogle();
    setIsDoingLogin(true);
  }

  const handleLogout= ()=>{
    console.log('Haciendo Logout');
    setDataLocalStorage({...initialDataUser})
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex gap-2">
          <img
            width={"50px"}
            src={cardioLogo}
            className="rounded"
            alt="cardioLogo"
          />
          Pediatra
        </Navbar.Brand>
        <div className="d-flex gap-1">
          <span className="btn btn-outline-info">
            <BiMenu
              onClick={toggleOffcanvas}
              style={{ color: `${colorMorado}`, fontSize: "25px" }}
            />
          </span>
          {dataUser.name === "" ? (
            <span onClick={handleLogin} className="btn btn-outline-info">Login </span>
          ) : (
            <span onClick={handleLogout} className="btn btn-outline-danger">Logout </span>
          )}
        </div>
        <CardioOffcanvas
          showOffcanvas={showOffcanvas}
          toggleOffcanvas={toggleOffcanvas}
        />
      </Container>
    </Navbar>
  );
};

export default CardioNavbar;
