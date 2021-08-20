import axios from "axios";

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/', 
    headers:{
       'Access-Control-Allow-Origin': '*',
       'Content-type': 'application/json',
       'Pragma': 'public',
       
      
    }
});

export default api;