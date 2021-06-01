import React, { useState } from 'react';
import { connect } from 'react-redux';
import useAddActivity from '@/hooks/user-page/add-activity.hook.js';
import { checkError } from '@/features/check-error.js';
import { PlusCircleSVG } from '@/components/features/icons.jsx';
import { setActivityFB } from '@/firebase/activitys.js';

const AddActivity = ({ onAddActivity, userId, actyvityes }) => {
    const [isAddition, setIsAddition] = useState(false);
    const { name, setName, color, setColor, activity } = useAddActivity();
    const [error, setError] = useState(null);
    const onChangeInput = (event) => {
        setError(null);
        setName(event.target.value)
    }
    const activityNameCheck = (name) => {
        if (!name) {
            setError('Введите название активности.')
            return true
        }
        if (actyvityes.find(item => item.activity === name)) {
            setError('Активность с таким названием уже существует.')
            return true
        }
        return false
    }
    const onClose = () => {
        setError('')
        setName('')
        setIsAddition(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (name === '') {
            setError('Введите название активности.')
            return
        } else if (actyvityes.find(item => item.activity === name)) {
            setError('Такая активность уже есть.')
            return
        }
        try {
            setActivityFB(userId, activity)
        } catch (err) {
            setError(err)
        }
        onAddActivity(activity)
        setName('')
    }
    return (
        <>
            {isAddition ?
                <form onSubmit={(event) => { onSubmit(event) }}>
                    <div className='input-group'>
                        <input
                            onChange={(event) => { onChangeInput(event) }}
                            value={name}
                            id='activityName'
                            placeholder='Введите название активности'
                            className={`form-control ${checkError(error)}`}
                            aria-label='Введите название активности'
                            aria-describedby='inputError' />
                        <input type="color"
                            onChange={(e) => { setColor(e.target.value) }}
                            className="form-control form-control-color"
                            id="exampleColorInput"
                            value={color}
                            title="Выберете цвет"
                            aria-label='Выберете цвет' />
                        <button className='btn btn-outline-primary'
                            type='submit'>
                            Добавить
                    </button>
                        <button className='btn btn-outline-secondary'
                            type='button'
                            onClick={onClose}>
                            Отмена
                </button>
                        <div className='invalid-feedback'
                            id='inputError'>
                            {error}
                        </div>
                    </div>
                </form>
                :
                <button className='btn btn-outline-primary d-flex align-items-center'
                    onClick={() => { setIsAddition(true) }}>
                    <PlusCircleSVG />
                    <span className='ms-2'>
                        Добавить активность
                    </span>
                </button>}
        </>
    )
}

export default connect(
    state => ({
        userId: state.user.userId,
        actyvityes: state.activityReducer.state
    }),
    dispatch => ({
        onAddActivity: (activity) => {
            dispatch({
                type: 'ADD_ACTIVITY',
                activity: activity
            })
        }
    })
)(AddActivity);