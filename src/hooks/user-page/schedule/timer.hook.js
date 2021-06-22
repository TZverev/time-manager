import { useEffect, useState, useRef } from 'react'

const useTimer = (data) => {
    const [hour, setHour] = useState(null);
    const [min, setMin] = useState(null);
    const [sec, setSec] = useState(null);
    const timer = useRef(null);

    useEffect(() => {
        calcTime()
        return () => {
            clearTimeout(timer.current)
        }
    }, [data]);

    const calcTime = () => {
        if (data) {
            let now = Date.now();
            let startHour = Math.floor((data.b - now) / 3600000) || null;
            let startMin = Math.floor((data.b - now) / 60000) - (startHour * 60);
            let startSec = Math.floor((data.b - now) / 1000) - ((startHour * 60 + startMin) * 60);
            setHour(startHour);
            setMin(startMin);
            setSec(startSec);
            reduceTimer()
            return
        }
        setHour(null);
        setMin(null);
        setSec(null);
    }

    const reduceTimer = () => {
        setSec((sec) => {
            if (sec > 0) {
                return sec - 1
            } else {
                setMin((min) => {
                    if (min > 0) {
                        return min - 1
                    } else {
                        setHour((hour) => {
                            if (hour > 0) {
                                return hour - 1
                            } else {
                                setMin(null);
                                setSec(null);
                                return null
                            }
                        })
                        return 59
                    }
                })
                return 59
            }
        })
        timer.current = setTimeout(reduceTimer, 1000)
    }

    return { hour, min, sec, }
}

export default useTimer;