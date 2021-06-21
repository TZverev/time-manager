import React from 'react';
import useTimer from '@/hooks/user-page/schedule/timer.hook.js';

const CurrentScheduleTimer = ({ data }) => {
    const { hour, min, sec } = useTimer(data);
    const timeTransformer = (num) => {
        if (num < 10) {
            return '0' + num
        } else {
            return num
        }
    }

    return (
        < h5 className='m-3'>
            {hour && `${timeTransformer(hour)}:`}
            {`${timeTransformer(min)}:`}
            {`${timeTransformer(sec)}`}
        </h5>
    )
}

export default CurrentScheduleTimer;