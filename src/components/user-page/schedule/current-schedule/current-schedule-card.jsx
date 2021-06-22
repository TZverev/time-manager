import React from 'react';
import { connect } from 'react-redux';
import useCurrentSchedule from '@/hooks/user-page/schedule/current-schedule-card.hook.js';
import LoadingCircle from './loading-circle.jsx';
import CurrentScheduleTimer from './timer.jsx';

const CurrentScheduleCard = ({ scheduleState }) => {
    const { data } = useCurrentSchedule(scheduleState);
    return (
        <div className='card'>
            <div className='card-body d-flex justify-content-center align-items-center flex-column'>
                <h5 className='card-title'>
                    Текущая активность:
                </h5>
                {data ?
                    <>
                        <LoadingCircle data={data} >
                            <CurrentScheduleTimer data={data} />
                        </LoadingCircle>
                        <p className='card-text'>
                            {data.name}
                        </p>
                    </>
                    :
                    <p className='card-text'>
                        Активности нет
                    </p>
                }
            </div>
        </div >
    )
}

export default connect(
    state => ({
        scheduleState: state.scheduleState.data,
    }),
    dispatch => ({})
)(CurrentScheduleCard);