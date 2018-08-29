import axios from 'axios';

const Link = 'http://gmaps.xyz:3002/';

PostAPI = async (path, data) =>{
    try {
    const response = await axios.post(`${Link}${path}`, data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
