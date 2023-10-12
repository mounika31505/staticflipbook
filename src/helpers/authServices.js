import { API_URLS } from "../helpers/constants/Constant"
//import { JSON_HEADERS, apiError, PublicApi } from "../helpers/axiosInstance";
import axios from 'axios';
import { JSON_HEADERS , FORM_HEADERS } from "./constants/Constant"

export const LogIN = async(FormData) => {
    try {
        const res = await axios.post( `${process.env.REACT_APP_API_BASEURL}/v2${API_URLS.loginUrl}`, FormData, {
            header: FORM_HEADERS
        })
        console.log(res,"resp")
        return { error: null, data: res.data };

    }
    catch (err) {
        console.log(err.response.data.detail,"loginerror")
        return{
            error: err.response.data.detail
            
        } 
    }
}
 export const signUp = async (first_name,last_name,email,password) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/v2${API_URLS.signupUrl}`, {first_name,last_name,email,password}, {
            header: JSON_HEADERS
        })
        console.log(res,"response")
        return { error: null, data: res.data };

    }
    catch (err) {
        console.log(err,"user")
        return {
            error: err.response.data.detail,
            data:{message:null}
        }
    }
}
/*export const verifyUser = async (token: string) => {
    try {
        const res = await PublicApi.get(API_URLS.verifyUserEmailUrl, {
            header: JSON_HEADERS,
            params: { token }
        })
    }
    catch (err: Error | any) {
        return {
            error: err.response.data.errors
        }
    }
} */
export const Forgotpassword =async(emailinfo) =>{
    try{
        const res = await axios.post( `${process.env.REACT_APP_API_BASEURL}/v2${API_URLS.forgotPasswordUrl}`, {email:emailinfo},{
            header:JSON_HEADERS
        })//1st-url;2nd-body/form data;3-headers
        return res.data
        
    }
    catch(err){
        //consol test
        return {
            error: err.message
        }
    }
}
