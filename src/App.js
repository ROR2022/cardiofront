import React, { useEffect, useState } from "react";
//import logo from './logo.svg';
//import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientIdGoogle } from "./assets/constants";
import PediatraContext from "./context/PediatraContext";
import { useLocalStorage } from "usehooks-ts";

const initialDataUser = {
  email: "",
  name: "",
  avatarUrl: "",
};

function App() {
  const [dataUser, setDataUser] = useState(initialDataUser);
  const [dataLocalStorage, setDataLocalStorage] = useLocalStorage(
    "dataUserPediatra",
    true
  );

  

  useEffect(() => {
      console.log('dataUserPeditra (app):..',dataLocalStorage);
      if(!dataLocalStorage.email){
        setDataUser({...initialDataUser})
      }else{
        setDataUser({...dataLocalStorage})
      }
  }, [dataLocalStorage]);

  return (
    <div className="">
      <GoogleOAuthProvider clientId={clientIdGoogle}>
        <PediatraContext.Provider
          value={[
            dataUser,
            setDataUser,
            initialDataUser,
            dataLocalStorage,
            setDataLocalStorage,
          ]}
        >
          <RouterProvider router={router} />
        </PediatraContext.Provider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
