import React, { useEffect, useState } from 'react';
import loadSchedule from '@/storage/functions/schedule/load-schedule.js';
import { connect } from 'react-redux';
import Loading from '@/components/features/loading.jsx';
import SettingsButton from './settings-button.jsx';
import ScheduleCardTitle from './schedule-card-title.jsx';
import ScheduleCardBody from './schedule-card-body.jsx';
import AddSchedule from './add-schedule.jsx';

const ScheduleCard = ({ userId, date, scheduleState, error, isLoading }) => {
    const [data, setData] = useState();
    const today = new Date().setHours(0, 0, 0, 0);
    useEffect(() => {
        loadData()
    }, [date])
    useEffect(() => {
        setData(scheduleState.find(item => item.date === date.toString()))
    }, [scheduleState, date])

    const loadData = async () => {
        await loadSchedule(userId, date.toString())
    }
    return (
        <div className='card schedule-card'>
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <ScheduleCardTitle date={date} today={today} />
                    <SettingsButton date={date} today={today} />
                </div>
                <hr />
                {isLoading.get ?
                    <Loading />
                    :
                    <>
                        <AddSchedule date={date} />
                        <ScheduleCardBody data={data} />
                    </>
                }
            </div>
            {error &&
                <div className="alert alert-danger m-3" role="alert">
                    {error}
                </div>
            }
        </div>
    )
}

export default connect(
    state => ({
        scheduleState: state.scheduleState.data,
        error: state.scheduleState.error,
        isLoading: state.scheduleState.isLoading,
        userId: state.userState.userId,
    }),
    dispatch => ({})
)(ScheduleCard);
