import axios from 'axios';

//Axios is used because it
const axiosInstance = axios.create({
    baseURL: 'https://127.0.0.1:5001/shopopia/us-central1/api', // The API (cloud function) URL
});

export default axiosInstance;