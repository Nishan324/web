import axios from "axios";
const Api = axios.create({
    baseURL : "http://localhost:5500",
    withCredentials : true,
    headers :{
        "Content-Type" : "application/json",
    }
})

const ApiWithFormData = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
        // 'authorization': `Bearer ${localStorage.getItem('token')}`
    },
});

// Token
const config = {
    headers : {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    },
}
 
export const createProductApi=(formData)=> ApiWithFormData.post("/api/product/create",formData)
export const getAllProductApi = () => Api.get('/api/product/all')
export const createUserApi = (data) => Api.post('/api/user/create', data)
export const loginApi = (data) => Api.post('/api/user/login', data)
 
// export const loginApi=(data)=>Api.post("/api/user/login",data)