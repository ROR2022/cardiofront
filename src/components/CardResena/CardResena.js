import React from 'react'
import Card from 'react-bootstrap/Card';
import WelcomeUser from '../WelcomeUser/WelcomeUser';
import { AiOutlineStar } from "react-icons/ai";
import { colorAzul, colorMorado } from '../../assets/constants';

const CardResena = ({dataResena}) => {
  const {rateExp,comentario} = dataResena;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          <WelcomeUser isCard={true} dataCard={dataResena}/>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted d-flex gap-1 justify-content-center align-items-center">
          <span>{rateExp}</span><AiOutlineStar style={{color:`${colorMorado}`, fontSize:'20px'}}/>
          </Card.Subtitle>
        <Card.Text>
          <span style={{color:`${colorAzul}`}} >{comentario}</span>
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default CardResena