import axios from "axios";
import { backUrl } from "../assets/constants"; 


export const agregarResena = async(dataResena)=>{
    try {
        const result = await axios.post(`${backUrl}/api/resena/createResena`,dataResena);
        //console.log(result);
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

export const recuperaResenas = async()=>{
    try {
        const result = await axios.get(`${backUrl}/api/resena/getAllResenas`);
        //console.log(result);
        return result

    } catch (error) {
        console.log(error);
        return error
    }
}