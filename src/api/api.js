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
export const createCartApi = (formData) => Api.post('/api/cart/create', formData, config)
export const getCartListApi = () => Api.get('/api/cart/all', config)
export const deleteCartApi = (id) => Api.delete(`/api/cart/delete/${id}`, config)
export const createWishListApi = (formData) => Api.post('/api/wish/create', formData, config)
export const getWishListApi = () => Api.get('/api/wish/all', config)
export const deleteWishListApi = (id) => Api.delete(`/api/wish/delete/${id}`, config)
export const deleteProductById = (id) => Api.delete(`/api/product/delete/${id}`)
export const updateProductApi = (id, formData) => ApiWithFormData.put(`/api/product/update/${id}`, formData)
export const getProductDetailsById = (id) => Api.get(`/api/product/getById/${id}`,id)
// export const loginApi=(data)=>Api.post("/api/user/login",data)