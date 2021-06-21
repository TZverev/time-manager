import store from '@/storage/store.js';
import { setScheduleFB } from '@/firebase/schedule.js';

let scheduleState = store.getState().scheduleState
store.subscribe(() => { scheduleState = store.getState().scheduleState })

const updateSchedule = async (id, schedule, date) => {
    let data = [...scheduleState.data]
    date = date.toString()
    data = data.map((item) => {
        if (item.date === date) {
            let scheduleArray = [...item.schedule];
            return {
                date: date,
                schedule: scheduleArray.map(i => {
                    if (i.id === schedule.id) {
                        return schedule
                    }
                    return i
                })
            }
        } else {
            return item
        }
    })
    store.dispatch({ type: 'UPDATE_SCHEDULE_START' });
    try {
        let item = data.find(i => i.date === date)
        await setScheduleFB(id, item)
        store.dispatch({
            type: 'ACTION_SCHEDULE_SUCCESS',
            data: data
        })
    } catch (err) {
        store.dispatch({
            type: 'ACTION_SCHEDULE_ERROR',
            error: error
        })
    }
}

export default updateSchedule;