import { useState } from "react";

const useCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date().setHours(0, 0, 0, 0))
    const incrementDate = () => {
        setCurrentDate((prevDate) => {
            return prevDate + (1000 * 60 * 60 * 24)
        })
    }
    const decrementDate = () => {
        setCurrentDate((prevDate) => {
            return prevDate - (1000 * 60 * 60 * 24)
        })
    }
    return {
        currentDate,
        incrementDate,
        decrementDate
    }
}

export default useCalendar;