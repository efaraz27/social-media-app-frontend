import axios from 'axios'
import { api } from '../urlConfig';

const axiosInstance = axios.create({
    baseURL: api,
    // headers:{
    //     'Authorization': ''
    // }
    headers: {
        "access-control-allow-origin": "*",
    }
});

export default axiosInstance;