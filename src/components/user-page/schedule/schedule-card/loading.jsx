import React from 'react';
import useLoading from '@/hooks/user-page/schedule/loading.hook.js';

const ScheduleItemLoading = ({ data }) => {
    const { percent } = useLoading(data)
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