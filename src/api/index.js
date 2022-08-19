import axios from 'axios';

const url = 'http://localhost:5000/photos';

export const fetchData = ()=> axios.get(url);

export const createImage = (newImage) => axios.post(url, newImage);

export const updateImage = (id, newPost) => axios.patch(`${url}/${id}`, newPost);

export const deleteImage = (id) => axios.delete(`${url}/${id}`)