
const initialState = {
    isLoading: false,
    data: [{
        date: '1623272400000',
        schedule: [
            { a: 1623272400000, b: 1623276000000, color: '#e9c9f8', name: 'Обед' },
            { a: 1623272400000, b: 1623283200000, color: '#156df5', name: 'Ужин' },
            { a: 1623326400000, b: 1623331200000, color: '#fe61d6', name: 'Завтрак' },
        ]
    }],
    error: null
}

const scheduleState = (state = initialState, action) => {
    if (action.type === 'LOAD_SCHEDULE_START') {
        return {
            isLoading: true,
            data: [...state.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_SUCCSESS') {
        return {
            isLoading: false,
            data: [...state.data, action.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_NO_DATA') {
        return {
            isLoading: false,
            data: [...state.data, action.data],
            error: null
        }
    }
    if (action.type === 'LOAD_SCHEDULE_ERROR') {
        return {
            isLoading: false,
            data: [...state.data],
            error: action.error.message
        }
    }
    return state
}

export default scheduleState;