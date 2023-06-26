import React from 'react'
import usePediatra from '../../hooks/usePediatra';
import { colorMorado } from '../../assets/constants';

const WelcomeUser = ({isCard,dataCard}) => {
    const [dataUser]=usePediatra();
    const {name,avatarUrl}=dataUser;
  return (
    <div >
      {!isCard&&<h3 style={{fontSize:'20px'}} className='text-info text-center'>Bienvenid@</h3>}
        
        <div className='d-flex justify-content-center align-items-center gap-1'>
        <img style={{width:'40px'}} className='rounded' src={dataCard?dataCard.idUser?.avatarUrl:avatarUrl} alt="avatar"  />
        <h3 style={{color:`${colorMorado}`, fontSize:'15px'}}>{dataCard?dataCard.idUser?.name:name}</h3>
        </div>
    </div>
  )
}

export default WelcomeUser