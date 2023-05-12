import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/baseUrl";
const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`,userData);
   if (response.data){
    return response.data;
   }
  
};
const login= async (userData) => {
    const response = await axios.post(`${base_url}user/login`,userData);
   if (response.data){
    localStorage.setItem('user',JSON.stringify(response.data));
    return response.data;
   }
};

const getUserWishlist = async () => {
    const response = await axios.get(`http://localhost:5000/api/user/getwishlist`,config);
   if (response.data){
    this.state.product = response.data.product;
    return response.data;
   } 
};

const addtocart= async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`,cartData);
   if (response.data){
    return response.data;
   }
};
const getcart= async () => {
    const response = await axios.get(`${base_url}user/getcart`,cartData);
   if (response.data){
    return response.data;
   }
};
const userService = {
    register, login, getUserWishlist,addtocart,getcart
}

export default userService ;