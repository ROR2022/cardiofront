import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//import axios from "axios";
import { useState, useEffect } from "react";
import usePediatra from "../../hooks/usePediatra";
import StarsRating from "../StarsRating/StarsRating";
import { agregarResena } from "../../api/apiResena";
import InfoToast from "../InfoToast/InfoToast";

const initialDataResena = {
  rateExp: 0,
  comentario: "",
  idUser: "",
};

const Resena = ({handleToogleNewResena}) => {
  const [rateExp, setRateExp] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState({
    show:false,
    msg:''
  });
  const [
    dataUser,
    setDataUser,
    initialDataUser,
    dataLocalStorage,
    setDataLocalStorage,
  ] = usePediatra();

  const [dataResena, setDataResena] = useState(initialDataResena);

  useEffect(() => {
    if (dataUser._id && !dataResena.idUser) {
      setDataResena({
        ...dataResena,
        idUser: dataUser._id,
      });
    }
  }, [dataUser._id]);
  useEffect(() => {
    if (rateExp !== 0) {
      setDataResena({
        ...dataResena,
        rateExp,
      });
    }
  }, [rateExp]);

  useEffect(() => {
    //console.log('dataResena:..',dataResena)
    if (dataResena.comentario === "" && dataResena.rateExp === 0) {
      //console.log("Reiniciando dataResena:...");
    }
  }, [dataResena]);

  const handleEnviar = async (e) => {
    e.preventDefault();
    //console.log("Agregando Comentario:..", dataResena);
    if (rateExp===0){
      setShowErrorToast({
        show:true,
        msg:'Favor de calificar tu experiencia, Gracias. 😊'
      })
      return
    } 
    if (dataResena.comentario===''){
      setShowErrorToast({
        show:true,
        msg:'Favor de comentarnos tu experiencia, Gracias. 😊'
      })
      return
    }
    try {
      const result = await agregarResena(dataResena);
      console.log(result);
      if(result) {
        //console.log('Aqui se manda renderizar home para mostrar la nueva Reseña:...');
        handleToogleNewResena();
      }
    } catch (error) {
      console.log(error);
    }
    setRateExp(0);
    setDataResena(initialDataResena);
    setShowToast(true);
    
  };
  const handleComentar = (e) => {
    setDataResena({
      ...dataResena,
      comentario: e.target.value,
    });
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };
  const handleCloseErrorToast = () => {
    setShowErrorToast({
      show:false,
      msg:''
    });
  };
  return (
    <>
      <hr />
      <Form className="w-75 ms-auto me-auto mb-3" onSubmit={handleEnviar}>
        <StarsRating rateExp={rateExp} setRateExp={setRateExp} />
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comentarios"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            value={dataResena.comentario}
            onChange={handleComentar}
            placeholder="Leave a comment here"
            style={{ height: "100px", resize: "none" }}
          />
        </FloatingLabel>
        {dataUser.email === "" && (
          <Form.Text className="text-muted">
            Favor de hacer Login para publicar comentarios, gracias🙂
          </Form.Text>
        )}

        <Button
          variant="info"
          type="submit"
          disabled={dataUser.email !== "" ? false : true}
        >
          Agregar Comentario
        </Button>
        { showErrorToast.show &&
          <InfoToast
            showToast={showErrorToast.show}
            handleCloseToast={handleCloseErrorToast}
            msg={showErrorToast.msg}
            success={false}
          />
        }
        {showToast && (
          <InfoToast
            showToast={showToast}
            handleCloseToast={handleCloseToast}
            msg={"Tu comentario fue publicado con exito, gracias. 👌"}
            success={true}
          />
        )}
      </Form>
    </>
  );
};

export default Resena;
