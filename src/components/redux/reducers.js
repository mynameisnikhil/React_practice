import { ADD_TO_CART, FETCH_IMAGES_FAIL, FETCH_IMAGES_REQ, FETCH_IMAGES_SUCCESS } from "./actions";

const initialState = {
    loading: false,
    error : false,
    payload: []
}

export const fetchImages = (state = initialState, action ) => {
    switch (action.type) { 
        case FETCH_IMAGES_REQ: 
        return {
            ...initialState,
            loading: true,
        }

        case FETCH_IMAGES_SUCCESS:
            return {
                ...initialState,
                payload: action.payload
            }

        case FETCH_IMAGES_FAIL:
            return {
                ...initialState,
                error : true,
                payload: action.payload
            }
    
        default:
            return state;
    }
}

export const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...initialState,
                payload: action.payload
            }
    
        default:
            return state;
    }
}