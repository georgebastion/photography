import * as api from '../api';

//Action Creators


export const getImages = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchData();
        dispatch({type:'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    } 
}

export const createImage = (image) => async (dispatch) =>{
    try {
        console.log(image)
        const [ data ] = await api.createImage(image);
        dispatch({type:'CREATE', payload:data })
    } catch (error) {
        console.log(error.message)      
    }
}