import axios from 'axios';

const Link = 'https://f19e2e80.ngrok.io/';

PostAPI = async (path, data) =>{
    try {
    const response = await axios.post(`${Link}${path}`, data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
