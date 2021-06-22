import React from 'react';
import ScheduleCard from './schedule-card/schedule-card.jsx';
import CurrentScheduleCard from './current-schedule/current-schedule-card.jsx';


const Schedule = () => {
    return (
        <div>
            <h2>
                Расписание
            </h2>
            <hr />
            <div className='d-flex align-items-start justify-content-between lex-wrap'>
                <ScheduleCard />
                <CurrentScheduleCard />
            </div>
        </div>
    )
}

export default Schedule;