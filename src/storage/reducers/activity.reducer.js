
const initialState = {
    isLoading: true,
    state: [],
    error: null
}

const activityReducer = (state = initialState, action) => {
    if (action.type === 'ADD_ACTIVITY') {
        return {
            isLoading: false,
            state: [action.activity, ...state.state],
            error: null
        }
    }
    if (action.type === 'DELETE_ACTIVITY') {
        return {
            isLoading: false,
            state: state.state.filter(item => item != action.activity)
        }
    }
    if (action.type === 'CHANGE_ACTIVITY') {
        return {
            isLoading: false,
            state: state.state.map(obj => {
                if (obj.id === action.activity.id) {
                    return action.activity
                }
                return obj
            })
        }
    }
    if (action.type === 'LOAD_ACTIVITYES') {
        return {
            isLoading: false,
            state: action.activitys
        }
    }
    return state
}

export default activityReducer;