
const initialState = {
    isLoading: {
        get: false,
        add: false,
    },
    data: [],
    error: null
}

const scheduleState = (state = initialState, action) => {
    if (action.type === 'LOAD_SCHEDULE_START') {
        return {
            isLoading: {
                get: true,
                add: false,
            },
            data: [...state.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_SUCCSESS') {
        return {
            isLoading: {
                get: false,
                add: false,
            },
            data: [...state.data, action.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_NO_DATA') {
        return {
            isLoading: {
                get: false,
                add: false,
            },
            data: [...state.data, action.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_ERROR') {
        return {
            isLoading: {
                get: false,
                add: false,
            },
            data: [...state.data],
            error: action.error.message
        }
    }
    if (action.type === 'ADD_SCHEDULE_START') {
        return {
            isLoading: {
                get: false,
                add: true,
            },
            data: [...state.data],
            error: null
        }
    }
    if (action.type === 'ADD_SCHEDULE_SUCCESS') {
        return {
            isLoading: {
                get: false,
                add: false,
            },
            data: action.data,
            error: null
        }
    }
    if (action.type === 'ADD_SCHEDULE_ERROR') {
        return {
            isLoading: {
                get: false,
                add: false,
            },
            data: [...state.data],
            error: action.error
        }
    }
    return state
}

export default scheduleState;