import { combineReducers, createStore } from "redux";
import listReducer from "./reducers/listReducer";


let reducers = combineReducers({
    tasksData: listReducer
});

let store = createStore(reducers)

export default store