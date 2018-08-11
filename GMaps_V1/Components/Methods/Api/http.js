import axios from 'axios';

const Link = 'https://e7779a7a.ngrok.io/';

PostAPI = async (path, data) =>{
    try {
    const response = await axios.post(`${Link}${path}`, data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
