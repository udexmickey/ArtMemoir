import {url} from "../config/config.json"
import axios from "axios"
const useLogin = () => {
    const login = async ({email, password}) => {
        const response =  await axios.post(url+"admin/login", {email, password})
        response.status === 200 && window.sessionStorage.setItem("token", response.data);
        if(response.status !== 200) return false
        return true
    }   

    return {
        login
    }
}

export default useLogin