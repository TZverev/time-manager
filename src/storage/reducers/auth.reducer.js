import { reducers } from '../store.js';

const initialState = (() => {
    const isAuth = localStorage.getItem('isAuth')
    if (isAuth) {
        return {
            isAuthenticated: true
        }
    } else {
        return {
            isAuthenticated: false
        }
    }
})()


const user = (state = initialState, action) => {
    if (action.type === 'LOG_IN') {
        localStorage.setItem('isAuth', true)
        return {
            isAuthenticated: true
        }
    }
    if (action.type === 'LOG_OUT') {
        localStorage.removeItem('isAuth')
        return {
            isAuthenticated: false
        }
    }
    return state
}

export default user;