import store from '@/storage/store.js';
import { getScheduleFB } from '@/firebase/schedule.js';

let scheduleState = store.getState().scheduleState
store.subscribe(() => { scheduleState = store.getState().scheduleState })

const loadSchedule = async (id, date) => {
    if (scheduleState.data.find(item => item.date === date)) {
        return
    }
    store.dispatch({ type: 'LOAD_SCHEDULE_START' })
    try {
        const data = await getScheduleFB(id, date)
        if (data.exists) {
            store.dispatch({
                type: 'LOAD_SCHEDULE_SUCCSESS',
                data: data.data()
            })
        } else {
            store.dispatch({
                type: 'LOAD_SCHEDULE_NO_DATA',
                data: { date: date, schedule: null }
            })
        }
    } catch (err) {
        console.log(err)
        store.dispatch({
            type: 'ACTION_SCHEDULE_ERROR',
            error: err
        })
    }
}

export default loadSchedule;