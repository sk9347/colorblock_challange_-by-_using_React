import { combineReducers } from "redux";
import ProductReducer from "./products/ProductReducers";
import { ReducerFun } from "./reducer";


const rootreducers=combineReducers(
    {
        moviedata:ReducerFun,
        productdata:ProductReducer
    }
)
export default rootreducers