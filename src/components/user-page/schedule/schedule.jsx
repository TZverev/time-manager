import React from 'react';
import ScheduleCard from './schedule-card/schedule-card.jsx';
import useCalendar from '@/hooks/user-page/schedule/calendar.hook.js';


const Schedule = () => {
    const {
        currentDate,
        incrementDate,
        decrementDate
    } = useCalendar();
    return (
        <div>
            <h2>
                Расписание
            </h2>
            <hr />
            <div className='d-flex align-items-center justify-content-between'>
                <button onClick={decrementDate}
                    className='btn btn-outline-secondary m-3'>
                    {'<'}
                </button>
                <ScheduleCard date={currentDate} />
                <button onClick={incrementDate}
                    className='btn btn-outline-secondary m-3'>
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Schedule;