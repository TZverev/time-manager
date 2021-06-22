import { useState, useEffect } from "react";
import setRandomColor from '@/features/random-color.js';
import addSchedule from '@/storage/functions/schedule/add-schedule.js';
import timeConverter from '@/features/timeconverter.js';

const useAddSchedule = (date, userId) => {
    const [beginning, setBeginnging] = useState('')
    const [end, setEnd] = useState('');
    const [color, setColor] = useState(setRandomColor());
    const [name, setName] = useState('');
    const [error, setError] = useState({});
    const [schedule, setSchedule] = useState({})

    useEffect(() => {
        setError({})
        setSchedule({
            a: timeConverter(beginning, date),
            b: timeConverter(end, date),
            color: color,
            name: name,
            id: Date.now()
        })
    }, [beginning, end, color, name])

    const onSubmit = (e) => {
        e.preventDefault()
        if (schedule.a > schedule.b) {
            setError({
                time: 'Активность должна начинаться раньше, чем заканчиваться.'
            })
            return
        }
        if (name === '') {
            setError({
                name: 'Введите название активности.'
            })
            return
        }
        addSchedule(userId, schedule, date)
        setName('')
        setBeginnging('')
        setEnd('')
        setColor(setRandomColor())
    }

    return {
        beginning, setBeginnging,
        end, setEnd,
        color, setColor,
        name, setName,
        error, onSubmit
    }
}

export default useAddSchedule;