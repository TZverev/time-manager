import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import user from './reducers/auth.reducer.js';
import activityReducer from './reducers/activity.reducer.js';

export const reducers = {
    user,
    activityReducer,
};
const combinatedReducers = combineReducers(reducers);
const store = createStore(combinatedReducers, applyMiddleware(thunk));

export default store;
