import { useState } from "react";


const useScheduleCardItem = (item) => {
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

    const modSetBeginning = (time) => setBeginning(transformTime(time));
    const modSetEnd = (time) => setEnd(transformTime(time));

    return {
        beginning, modSetBeginning, setBeginning,
        end, modSetEnd, setEnd,
        color, setColor,
        name, setName,
    }
}

export default useScheduleCardItem;