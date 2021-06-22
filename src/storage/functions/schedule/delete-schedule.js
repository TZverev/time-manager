import store from '@/storage/store.js';
import { setScheduleFB } from '@/firebase/schedule.js';

let scheduleState = store.getState().scheduleState
store.subscribe(() => { scheduleState = store.getState().scheduleState })

const deleteSchedule = async (userId, schedule, date) => {
    let data = [...scheduleState.data]
    date = date.toString()
    data = data.map((item) => {
        if (item.date === date) {
            let scheduleArray = [...item.schedule];
            const index = scheduleArray.indexOf(schedule);
            if (index > -1) {
                scheduleArray.splice(index, 1);
            }
            return {
                date: date,
                schedule: [...scheduleArray]
            }
        } else {
            return item
        }
    })
    store.dispatch({ type: 'UPDATE_SCHEDULE_START' });
    try {
        let item = data.find(i => i.date === date)
        await setScheduleFB(userId, item)
        store.dispatch({
            type: 'ACTION_SCHEDULE_SUCCESS',
            data: data
        })
    } catch (err) {
        store.dispatch({
            type: 'ACTION_SCHEDULE_ERROR',
            error: err
        })
    }
}

export default deleteSchedule;