import React, { useEffect, useState } from 'react';
import loadSchedule from '@/storage/functions/schedule.js';
import { connect } from 'react-redux';
import Loading from '@/components/features/loading.jsx';
import { PencilSVG } from '@/components/features/icons.jsx';
import ScheduleCardTitle from './schedule-card-title.jsx';
import ScheduleCardBody from './schedule-card-body.jsx';

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
                    {date >= today &&
                        <button className='btn btn-outline-primary d-flex align-items-center'
                            aria-label='Добавить активность'>
                            <PencilSVG />
                        </button>
                    }
                </div>
                <hr />
                {isLoading ?
                    <Loading />
                    :
                    <ScheduleCardBody data={data} />
                }
            </div>
            {error &&
                <div class="alert alert-danger m-3" role="alert">
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
