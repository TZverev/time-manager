import React from 'react';
import ScheduleCardItem from './schedule-card-item.jsx';

const ScheduleCardBody = ({ data }) => {
    const compare = (first, second) => {
        if (first.a > second.a) return 1;
        if (first.a === second.a) return 0;
        if (first.a < second.a) return -1;
    }
    return (
        <>
            {(data && data.schedule) ?
                <div>
                    {data.schedule.sort(compare).map(item => {
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