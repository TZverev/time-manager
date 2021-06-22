import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userState from './reducers/auth.reducer.js';
import activityState from './reducers/activity.reducer.js';
import scheduleState from './reducers/schedule.reducer.js';

export const reducers = {
    userState,
    activityState,
    scheduleState,
};
const combinatedReducers = combineReducers(reducers);
const store = createStore(combinatedReducers, applyMiddleware(thunk));

export default store;
