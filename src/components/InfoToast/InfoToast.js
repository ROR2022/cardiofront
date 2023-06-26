import React from 'react'
import Toast from 'react-bootstrap/Toast';
import logoPediatra from '../../assets/images/logoCardio1.png';

const InfoToast = ({showToast,handleCloseToast,msg,success}) => {
  return (
    <Toast className='my-3' show={showToast} onClose={handleCloseToast}>
      <Toast.Header>
        <img width={'50px'} src={logoPediatra} className="rounded me-2" alt="logo" />
        <strong className="me-auto">Pediatra</strong>
        
      </Toast.Header>
      <Toast.Body> <span className={success?'text-success':'text-danger'}>{msg}</span>  </Toast.Body>
    </Toast>
  )
}

export default InfoToast