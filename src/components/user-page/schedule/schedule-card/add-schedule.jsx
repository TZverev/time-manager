import React from 'react';
import useAddSchedule from '@/hooks/user-page/schedule/add-schedule.hook.js';
import { connect } from 'react-redux';
import { checkError } from '@/features/check-error.js';

const AddSchedule = ({ date, userId, isLoading }) => {
    const {
        beginning, setBeginnging,
        end, setEnd,
        color, setColor,
        name, setName,
        error, onSubmit
    } = useAddSchedule(date, userId);

    return (
        <form className='input-group mb-3'
            onSubmit={(e) => { onSubmit(e) }}>
            <input className={`form-control ${checkError(error.time)}`}
                required
                type='time'
                value={beginning}
                onChange={(e) => { setBeginnging(e.target.value) }}
                aria-label='Начало активности'
                aria-describedby='inputError'
            />
            <span className='input-group-text'>-</span>
            <input className={`form-control ${checkError(error.time)}`}
                required
                value={end}
                onChange={(e) => { setEnd(e.target.value) }}
                type='time'
                aria-label='Конец активности'
                aria-describedby='inputError'
            />
            <input type='color'
                className='form-control form-control-color'
                onChange={(e) => { setColor(e.target.value) }}
                value={color} />
            <input className={`form-control ${checkError(error.name)}`}
                required
                onChange={(e) => { setName(e.target.value) }}
                value={name}
                placeholder='Название активности'
                aria-label='Введите название активности'
                aria-describedby='inputError' />
            <button className='btn btn-outline-primary'
                disabled={isLoading}
                type='submit'>
                Добавить
            </button>
            <div className='invalid-feedback'
                id='inputError'>
                {error.time || error.name}
            </div>
        </form>
    )
}

export default connect(
    state => ({
        userId: state.userState.userId,
        schedule: state.scheduleState.data,
        isLoading: state.scheduleState.isLoading.add
    }),
    dispatch => ({})
)(AddSchedule);