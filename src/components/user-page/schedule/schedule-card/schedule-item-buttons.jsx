import React from 'react';
import { connect } from 'react-redux';
import { BucketSVG, PencilSVG, CheckSVG, XSVG } from '@/components/features/icons.jsx';

const ScheduleItemButtons = ({ isСhanging, cancelChanging, name, toggleChanging, onDelete, isLoading }) => {
    return (
        <>
            {isСhanging ?
                <>
                    <button className='btn btn-outline-success'
                        disabled={isLoading}
                        type='submit'
                        aria-label='Сохранить изменения'>
                        <CheckSVG />
                    </button>
                    <button className='btn btn-outline-secondary'
                        disabled={isLoading}
                        type='button'
                        aria-label='Отменить изменения'
                        onClick={cancelChanging}>
                        <XSVG />
                    </button>
                </>
                :
                <button className='btn btn-outline-secondary'
                    disabled={isLoading}
                    type='button'
                    aria-label={'Изменить активность ' + name}
                    onClick={() => { toggleChanging(true) }}>
                    <PencilSVG />
                </button>
            }
            <button className='btn btn-outline-danger'
                disabled={isLoading}
                onClick={onDelete}
                type='button'
                aria-label={'Удалить активность ' + name}>
                <BucketSVG />
            </button>
        </>
    )
}

export default connect(
    state => ({
        isLoading: state.scheduleState.isLoading.update,
    }),
    dispatch => ({})
)(ScheduleItemButtons);