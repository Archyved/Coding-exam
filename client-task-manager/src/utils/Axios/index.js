const axios = require('axios');
const Fetch = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    'Content-Type': 'application/json', 
  }
});
export default Fetch
