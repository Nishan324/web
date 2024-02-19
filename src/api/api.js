import axios from "axios";
const Api=axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
    headers:{
        "Content-Type":"multipart/form-data"
    }
})
 
export const CreateApi=(data)=>Api.post("/api/user/create",data)
 
export const loginApi=(data)=>Api.post("/api/user/login",data)