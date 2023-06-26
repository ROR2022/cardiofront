import React, { useEffect, useState } from "react";
import { recuperaResenas } from "../../api/apiResena";
import CardResena from "../CardResena/CardResena";
import { myId } from "../../lib/myLib";

const ShowResenas = ({ handleToogleNewResena, isNewResena }) => {
  const [dataResenas, setDataResenas] = useState([]);
  useEffect(() => {
    //console.log('Montando el componente ShowResenas:...')
    cargarDatos();
  }, []);

  useEffect(() => {
    if (dataResenas.length > 0) {
      //console.log('Aqui ya se mostraron las reseñas:...')
      handleToogleNewResena();
    }
  }, [dataResenas]);

  useEffect(() => {
    if (isNewResena) {
      //console.log('Se supone que vuelve a pintar ShowResenas:...');
      cargarDatos();
    }
  }, [isNewResena]);

  const cargarDatos = async () => {
    try {
      const result = await recuperaResenas();
      //console.log("dataResenas:...", result);
      if (result?.data?.docs?.docs) {
        setDataResenas([...result?.data?.docs?.docs]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-3">
      <hr />
      <div className="d-flex flex-wrap justify-content-around gap-2">
        {dataResenas.map((item) => {
          return <CardResena key={myId()} dataResena={item} />;
        })}
      </div>
    </div>
  );
};

export default ShowResenas;
