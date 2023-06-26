import axios from "axios";
import { backUrl } from "../assets/constants"; 


export const loginUserPediatra = async(dataUser)=>{
    try {
        const result = await axios.post(`${backUrl}/api/user/createUser`,dataUser);
        console.log(result);
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}