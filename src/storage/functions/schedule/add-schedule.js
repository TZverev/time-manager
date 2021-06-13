import store from '@/storage/store.js';
import { addScheduleFB } from '@/firebase/schedule.js';

let scheduleState = store.getState().scheduleState
store.subscribe(() => { scheduleState = store.getState().scheduleState })

const addSchedule = async (id, schedule, date) => {
    let data = [...scheduleState.data]
    date = date.toString()
    data = data.map((item) => {
        if (item.date === date) {
            let scheduleArray = [];
            if (item.schedule) {
                scheduleArray = [...item.schedule]
            }
            return {
                date: date,
                schedule: [
                    ...scheduleArray,
                    schedule
                ]
            }
        } else {
            return item
        }
    })
    store.dispatch({ type: 'ADD_SCHEDULE_START' })
    try {
        let item = data.find(i => i.date === date)
        await addScheduleFB(id, item)
        store.dispatch({
            type: 'ADD_SCHEDULE_SUCCESS',
            data: data
        })
    } catch (err) {
        console.log(err)
        store.dispatch({ type: 'ADD_SCHEDULE_ERROR', error: err.message })
    }
}

export default addSchedule;