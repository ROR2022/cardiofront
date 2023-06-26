import { useGoogleLogin } from "@react-oauth/google";
import usePediatra from '../hooks/usePediatra';
import axios from "axios";

const LoginGoogle = ()=>{
    const [dataUser,setDataUser,initialDataUser,dataLocalStorage,setDataLocalStorage]=usePediatra();
    const doLogin= 
        useGoogleLogin({
            onSuccess: async (tokenResponse) => {
              console.log(tokenResponse);
              //setMyTokenResponse(tokenResponse);
              // fetching userinfo can be done on the client or the server
              const userInfo = await axios
                .get("https://www.googleapis.com/oauth2/v3/userinfo", {
                  headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                })
                .then((res) => res.data);
        
              console.log("UserInfo:..", userInfo);
              const loginDataUser= {
                  name: userInfo.name,
                  email: userInfo.email,
                  avatarUrl: userInfo.picture,
              }
              setDataLocalStorage({...loginDataUser});
              //window.localStorage.setItem('dataUserPediatra',dataUser);
              //return (userInfo);
              /* if (userInfo.email) {
                setMyDataUser({
                  
                });
                setIsConnected(true);
              } */
        
              // flow: 'implicit', // implicit is the defaul
            },
          });
    
    
    
      //console.log('result(userInfo):..',userInfo);
 return doLogin
} 

  export default LoginGoogle;