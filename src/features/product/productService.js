import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/baseUrl";


const getProducts = async () => {
    const response = await axios.get(`${base_url}product`);
   if (response.data){
    return response.data;
   }
  
};
const Addwishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/addwishlist`,prodId, config);
   if (response.data){
    return response.data;
   }
  
};

const productService = {
 getProducts ,Addwishlist
}

export default productService ;