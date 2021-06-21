import React from 'react';
import ScheduleCardItem from './schedule-card-item.jsx';

const ScheduleCardBody = ({ data, isChanging }) => {
    const compare = (first, second) => {
        if (first.a > second.a) return 1;
        if (first.a === second.a) return 0;
        if (first.a < second.a) return -1;
    }
    return (
        <>
            {(data && data.schedule && data.schedule.length) ?
                <div>
                    {data.schedule.sort(compare).map(item => {
                        return (
                            <ScheduleCardItem key={item.id}
                                item={item}
                                date={data.date}
                                isChangingCard={isChanging} />
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