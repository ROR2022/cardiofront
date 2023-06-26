import React, { useEffect, useState } from "react";
import { recuperaResenas } from "../../api/apiResena";
import CardResena from "../CardResena/CardResena";
import { myId } from "../../lib/myLib";

const ShowResenas = ({ handleToogleNewResena, isNewResena }) => {
  const [dataResenas, setDataResenas] = useState([]);
  const [procesoCarga, setProcesoCarga] = useState({
    mont:false,
    carga:false,
    nuevo:false,
    resultCarga:'',
    inicioCarga:false
  })
  useEffect(() => {
    //console.log('Montando el componente ShowResenas:...')
    setProcesoCarga({
      ...procesoCarga,
      mont:true
    })
    cargarDatos();
  }, []);

  useEffect(() => {
    if (dataResenas.length > 0) {
      //console.log('Aqui ya se mostraron las reseñas:...')
      setProcesoCarga({
        ...procesoCarga,
        carga:true
      })
      handleToogleNewResena();
    }
  }, [dataResenas]);

  useEffect(() => {
    if (isNewResena) {
      //console.log('Se supone que vuelve a pintar ShowResenas:...');
      setProcesoCarga({
        ...procesoCarga,
        nuevo:true
      })
      cargarDatos();
    }
  }, [isNewResena]);

  const cargarDatos = async () => {
    /* setProcesoCarga({
      ...procesoCarga,
      inicioCarga:true
    }) */
    console.log('Inicio de la carga:...')
    try {
      const result = await recuperaResenas();
      //console.log("dataResenas:...", result);
      if (result?.data?.docs?.docs) {
        setDataResenas([...result?.data?.docs?.docs]);
        /* setProcesoCarga({
          resultCarga:JSON.stringify(result?.data?.docs?.docs)
        }) */
      }
    } catch (error) {
      console.log(error);
      setProcesoCarga({
        resultCarga:JSON.stringify(error)
      })
    }
  };

  return (
    <div className="mb-3">
      <hr />
      {procesoCarga.mont&&<div>Componente montado</div>}
      {procesoCarga.carga&&<div>Datos cargados: {dataResenas.length}</div>}
      {procesoCarga.nuevo&&<div>Nuevo Comentario</div>}
      {procesoCarga.inicioCarga&&<div>Se ha iniciado la carga</div>}
      {procesoCarga.resultCarga&&<div>Resultado de la Carga: {procesoCarga.resultCarga}</div>}
      <div className="d-flex flex-wrap justify-content-around gap-2">
        {dataResenas.map((item) => {
          return <CardResena key={myId()} dataResena={item} />;
        })}
      </div>
    </div>
  );
};

export default ShowResenas;
