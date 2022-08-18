import axios from 'axios';

const url = 'http://localhost:5000/photos';

export const fetchData = ()=> axios.get(url);

export const createImage = (newImage) => axios.post(url, newImage);