import axios from "axios";


const createrequet = async (contactData) => {
    const response = await axios.post(`http://localhost:5000/api/contact`,contactData);
    if (response.data)
    {
        return response.data;
    }
  
};

const contactService = {
    createrequet,
}

export default contactService ;