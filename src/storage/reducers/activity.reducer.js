
const initialState = [
    { activity: 'Обед', color: { r: 0, g: 0, b: 0 }, id: 1 },
    { activity: 'Ужин', color: { r: 100, g: 20, b: 30 }, id: 2 },
    { activity: 'Завтрак', color: { r: 40, g: 50, b: 70 }, id: 3 },
    { activity: 'Сон', color: { r: 110, g: 110, b: 110 }, id: 4 },
    { activity: 'Обед', color: { r: 20, g: 30, b: 0 }, id: 5 },
    { activity: 'Ужин', color: { r: 50, g: 0, b: 20 }, id: 6 },
    { activity: 'Завтрак', color: { r: 50, g: 50, b: 60 }, id: 7 },
    { activity: 'Сон', color: { r: 220, g: 230, b: 20 }, id: 8 }
]

const activityReducer = (state = initialState, action) => {
    if (action.type === 'ADD_ACTIVITY') {
        return [action.activity, ...state]
    }
    if (action.type === 'DELETE_ACTIVITY') {
        return state.filter(item => item != action.activity)
    }
    return state
}

export default activityReducer;