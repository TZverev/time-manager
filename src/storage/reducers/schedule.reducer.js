
const initialState = {
    isLoading: {
        get: false,
        add: false,
        update: false,
    },
    data: [],
    error: null
}

const isLoading = (type) => {
    let get = false;
    let add = false;
    let update = false;

    if (type === 'get') {
        get = true
    }
    if (type === 'add') {
        add = true
    }
    if (type === 'update') {
        update = true
    }
    return {
        get: get,
        add: add,
        update: update,
    }
}

const scheduleState = (state = initialState, action) => {
    if (action.type === 'LOAD_SCHEDULE_START') {
        return {
            isLoading: isLoading('get'),
            data: [...state.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_SUCCSESS') {
        return {
            isLoading: isLoading(),
            data: [...state.data, action.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_NO_DATA') {
        return {
            isLoading: isLoading(),
            data: [...state.data, action.data],
            error: null
        }
    }
    if (action.type === 'ADD_SCHEDULE_START') {
        return {
            isLoading: isLoading('add'),
            data: [...state.data],
            error: null
        }
    }
    if (action.type === 'UPDATE_SCHEDULE_START') {
        return {
            isLoading: isLoading('update'),
            data: [...state.data],
            error: null
        }
    }
    if (action.type === 'ACTION_SCHEDULE_SUCCESS') {
        return {
            isLoading: isLoading(),
            data: action.data,
            error: null
        }
    }
    if (action.type === 'ACTION_SCHEDULE_ERROR') {
        return {
            isLoading: isLoading(),
            data: [...state.data],
            error: action.error
        }
    }
    return state
}

export default scheduleState;