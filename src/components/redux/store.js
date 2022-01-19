import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchImages, addToCartReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const allReducer = combineReducers({
    fetchImages: fetchImages,
    addItemToCart: addToCartReducer
})


const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;