import React, { useEffect, useRef, useState } from 'react';

const ScheduleItemLoading = ({ data }) => {
    const [time, setTime] = useState(Date.now());
    const [percent, setPercent] = useState();
    const timer = useRef(null)

    const activeTimer = () => {
        setTime(Date.now())
        if (Date.now() < data.a) {
            timer.current = setTimeout(activeTimer, data.a - Date.now())
            return
        }
        if (Date.now() > data.b) {
            return
        }
        timer.current = setTimeout(activeTimer, (data.b - data.a) / 100)
    }
    const calculate = () => {
        let result = (time - data.a) / ((data.b - data.a) / 100)
        if (result > 100) {
            return 100
        } else if (result < 0) {
            return 0
        } else {
            return result
        }
    }
    useEffect(() => {
        setPercent(calculate())
    }, [time])
    useEffect(() => {
        activeTimer()
        return () => {
            clearTimeout(timer.current)
        }
    }, [])
    return (
        <div className="progress mb-3 mt-1"
            style={{ height: '0.3rem' }}>
            <div className="progress-bar"
                role="progressbar"
                style={{ width: percent + '%', backgroundColor: data.color }}
                aria-valuenow={percent}
                aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    )
}

export default ScheduleItemLoading;