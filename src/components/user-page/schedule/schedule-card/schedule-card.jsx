import React, { useEffect, useState } from 'react';
import loadSchedule from '@/storage/functions/schedule/load-schedule.js';
import { connect } from 'react-redux';
import Loading from '@/components/features/loading.jsx';
import SettingsButton from './settings-button.jsx';
import ScheduleCardTitle from './schedule-card-title.jsx';
import ScheduleCardBody from './schedule-card-body.jsx';
import AddSchedule from './add-schedule.jsx';
import useCalendar from '@/hooks/user-page/schedule/calendar.hook.js';

const ScheduleCard = ({ userId, scheduleState, error, isLoading }) => {
    const [data, setData] = useState();
    const today = new Date().setHours(0, 0, 0, 0);
    const [isChanging, toggleChanging] = useState(false);
    const {
        date,
        incrementDate,
        decrementDate
    } = useCalendar();

    useEffect(() => {
        loadData()
        toggleChanging(false)
    }, [date])

    useEffect(() => {
        setData(scheduleState.find(item => item.date === date.toString()))
    }, [scheduleState, date])

    const loadData = async () => {
        await loadSchedule(userId, date.toString())
    }
    return (
        <div className='card me-3 flex-grow-1'>
            <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center'>
                    <ScheduleCardTitle date={date}
                        today={today} />
                    <div className='d-flex'>
                        <SettingsButton date={date}
                            today={today}
                            toggleChanging={() => toggleChanging(!isChanging)} />
                        <button onClick={decrementDate}
                            className='btn btn-outline-secondary me-3'>
                            {'<'}
                        </button>
                        <button onClick={incrementDate}
                            className='btn btn-outline-secondary'>
                            {'>'}
                        </button>
                    </div>
                </div>
                <hr />
                {isLoading.get ?
                    <Loading />
                    :
                    <>
                        {isChanging && <AddSchedule date={date} />}
                        <ScheduleCardBody data={data} isChanging={isChanging} />
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
