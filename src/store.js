import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./reducers/restReducer.js";

const reducers = combineReducers({
    restaurantReducer: restReducer
})

// middleware
const middleware = [thunk]
// create store

const store = createStore(reducers, applyMiddleware(...middleware))

export default store