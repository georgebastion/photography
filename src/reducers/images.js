/* eslint-disable import/no-anonymous-default-export */

export default (images = [], action)=>{
    switch (action.type) {
        case 'FETCH_ALL':            
            return action.payload;
        case 'CREATE':   
            return [...images, action.payload];
        default:
            return images;
    }
}