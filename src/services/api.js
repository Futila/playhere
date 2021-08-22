import axios from "axios";

const api = axios.create({
    baseURL: ' https://cors-anywhere.herokuapp.com/https://api.deezer.com', 
    headers:{
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json',
       'Pragma': 'public',
       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
       
      
    }
});

export default api