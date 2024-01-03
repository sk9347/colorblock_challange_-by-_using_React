import { legacy_createStore } from "redux";
import rootreducers from "./combinreducer";


export const Redstore=legacy_createStore(rootreducers)