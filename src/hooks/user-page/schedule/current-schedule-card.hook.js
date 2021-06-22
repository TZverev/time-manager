import { useEffect, useState, useRef } from 'react'

const useCurrentSchedule = (scheduleState) => {
    const [data, setData] = useState(null);
    const timer = useRef(null);

    useEffect(() => {
        checkData()
        return () => {
            clearTimeout(timer.current)
        }
    }, [scheduleState]);

    const checkData = () => {
        let currentDay;
        let now = Date.now();
        if (scheduleState) {
            currentDay = scheduleState.find(i => {
                return i.date === new Date().setHours(0, 0, 0, 0).toString();
            })
        }
        if (currentDay && currentDay.schedule && currentDay.schedule.length) {
            let newData = currentDay.schedule.find(i => {
                return i.a <= now && i.b > now
            })
            if (newData) {
                setData(newData);
                timer.current = setTimeout(checkData, newData.b - now + 10)
            } else {
                let nextData = currentDay.schedule.reduce((data, current) => {
                    if ((current.a > now) || (data.a > current.a)) {
                        return current
                    }
                    return data
                })
                if (nextData.a < now) {
                    nextData = null
                }
                setData(null)
                if (nextData) {
                    timer.current = setTimeout(checkData, nextData.a - now + 10)
                }
            }
            return
        }
        setData(null)
    }

    return { data }
}

export default useCurrentSchedule;