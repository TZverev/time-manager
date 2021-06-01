
const initialState = () => {
    const isAuth = localStorage.getItem('isAuth')
    if (isAuth) {
        return {
            isLoading: true,
            isAuthenticated: true
        }
    } else {
        return {
            isAuthenticated: false,
            isLoading: false,
        }
    }
}
const user = (state = initialState(), action) => {
    if (action.type === 'LOG_IN') {
        localStorage.setItem('isAuth', true)
        return {
            isLoading: false,
            isAuthenticated: true,
            userId: action.user.uid
        }
    }
    if (action.type === 'LOG_OUT') {
        localStorage.removeItem('isAuth')
        return {
            isLoading: false,
            isAuthenticated: false
        }
    }
    return state
}

export default user;