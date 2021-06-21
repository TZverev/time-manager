import { useState, useEffect } from "react";
import updateSchedule from '@/storage/functions/schedule/update-schedule.js';
import timeConverter from '@/features/timeconverter.js';


const useScheduleCardItem = (item, userId, date) => {
    const transformTime = (time) => {
        const check = (num) => {
            if (num < 10) {
                return '0' + num
            } else {
                return num
            }
        }
        return check(new Date(time).getHours()) + ':' + check(new Date(time).getMinutes())
    }
    const [beginning, setBeginning] = useState(transformTime(item.a));
    const [end, setEnd] = useState(transformTime(item.b));
    const [color, setColor] = useState(item.color);
    const [name, setName] = useState(item.name);
    const [schedule, setSchedule] = useState(item);

    const [isСhanging, toggleChanging] = useState(false);
    const [isSettings, toggleSettings] = useState(false);
    const [error, setError] = useState('')

    const modSetBeginning = (time) => setBeginning(transformTime(time));
    const modSetEnd = (time) => setEnd(transformTime(time));


    useEffect(() => {
        setError('')
        setSchedule({
            a: timeConverter(beginning, +date),
            b: timeConverter(end, +date),
            name: name,
            color: color,
            id: item.id
        })
    }, [beginning, end, color, name]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (timeConverter(beginning, +date) > timeConverter(end, +date)) {
            setError('Активность должна начинаться раньше, чем заканчиваться.')
            return
        }
        if (name === '') {
            setError('Введите название активности.')
            return
        }
        updateSchedule(userId, schedule, date)
        toggleChanging(false);
        toggleSettings(false);
    }

    return {
        beginning, modSetBeginning, setBeginning,
        end, modSetEnd, setEnd,
        color, setColor,
        name, setName,
        isСhanging, toggleChanging,
        onSubmit, error,
        isSettings, toggleSettings
    }
}

export default useScheduleCardItem;