import React from 'react';
import useChangeActivity from '@/hooks/user-page/activitys/change-activity.hook.js';
import { setActivityFB, deleteActivityFB } from '@/firebase/activitys.js';
import { BucketSVG, PencilSVG, CheckSVG, XSVG } from '@/components/features/icons.jsx';
import { connect } from 'react-redux';
import { checkError } from '@/features/check-error.js';

const ActivityItem = ({ item, onDelete, onChangeActivity, activityes, userId }) => {
    const {
        isСhanging, setIsChanging, cancelChanging,
        color, handleChangeColor,
        name, handleChangeName,
        activity,
        error, setError,
    } = useChangeActivity(item);

    const onSubmit = (e) => {
        e.preventDefault()
        if (name === '') {
            setError('Введите название активности.')
            return
        } else if (activityes.find(item => item.activity === name) && item.activity !== name) {
            setError('Такая активность уже есть.')
            return
        }
        try {
            setActivityFB(userId, activity)
        } catch (err) {
            setError(err)
        }
        onChangeActivity(activity, userId)
        setIsChanging(false)
    }

    const onDeleteActiviy = () => {
        try {
            deleteActivityFB(userId, activity)
            onDelete(item, userId)
        } catch {
            setError(err)
        }
    }

    return (
        <form className='input-group mt-3'
            onSubmit={(e) => { onSubmit(e) }}>
            <input
                disabled={!isСhanging}
                onChange={(e) => { handleChangeColor(e) }}
                type="color"
                className="form-control form-control-color"
                id="exampleColorInput"
                value={color}
                title="Choose your color" />
            <input
                className={`form-control ${checkError(error)}`}
                onChange={(e) => { handleChangeName(e) }}
                type='text'
                disabled={!isСhanging}
                value={name} />
            {isСhanging ?
                <>
                    <button className='btn btn-outline-success'
                        type='submit'
                        aria-label='Сохранить изменения'>
                        <CheckSVG />
                    </button>
                    <button className='btn btn-outline-secondary'
                        type='button'
                        aria-label='Отменить изменения'
                        onClick={cancelChanging}>
                        <XSVG />
                    </button>
                </>
                :
                <button className='btn btn-outline-secondary'
                    type='button'
                    aria-label={'Изменить активность' + item.activity}
                    onClick={() => { setIsChanging(true) }}>
                    <PencilSVG />
                </button>
            }
            <button className='btn btn-outline-danger'
                onClick={onDeleteActiviy}
                type='button'
                aria-label={'Удалить активность' + item.activity}>
                <BucketSVG />
            </button>
            <div className='invalid-feedback'
                id='inputError'>
                {error}
            </div>
        </form>
    )
}

export default connect(
    state => ({
        activityes: state.activityState.state,
        userId: state.userState.userId
    }),
    dispatch => ({
        onChangeActivity: (activity) => {
            dispatch({
                type: 'CHANGE_ACTIVITY',
                activity: activity
            })
        },
        onDelete: (activity) => {
            dispatch({
                type: 'DELETE_ACTIVITY',
                activity: activity
            })
        }
    })
)(ActivityItem);