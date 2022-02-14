import { combineReducers, createStore } from "redux";
import projectReducer from "./reducers/projectReducer";
import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({
    projects: projectReducer,
    todos: todoReducer
})

export const store = createStore(reducers)

