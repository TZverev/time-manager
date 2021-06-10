import React from 'react';
import ScheduleCardItem from './schedule-card-item.jsx';

const ScheduleCardBody = ({ data }) => {
    return (
        <>
            {(data && data.schedule) ?
                <div>
                    {data.schedule.map(item => {
                        return (
                            <ScheduleCardItem key={item.a + item.name} item={item} />
                        )
                    })}
                </div>

                :
                <p className='card-text '>
                    Активностей нет.
                </p>
            }
        </>
    )
}

export default ScheduleCardBody;