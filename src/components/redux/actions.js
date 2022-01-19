import axios from "axios";

export const FETCH_IMAGES_REQ = 'FETCH_IMAGES_REQ';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAIL = 'FETCH_IMAGES_FAIL';
export const ADD_TO_CART = 'ADD_TO_CART'





export const fetchImagesReq = () => {
    return {
        type: FETCH_IMAGES_REQ
    }
    
}

export const fetchImagesSuccess = (data) => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        payload: data
    }
}

export const fetchImagesFail = (error) => {
    return {
        type: FETCH_IMAGES_FAIL,
        payload: error
    }
}

export const fetchImages = () => {
    return async (dispatch) => {
        dispatch(fetchImagesReq())
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
            dispatch(fetchImagesSuccess(response.data))
        } catch (error) {
            dispatch(fetchImagesFail(error))
        }
    }
}

export const addToCart = (productprice) => {
    return {
        type : ADD_TO_CART,
        payload: productprice
    }
}
