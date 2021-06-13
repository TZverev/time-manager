import React from 'react';
import { BucketSVG, PencilSVG, CheckSVG, XSVG } from '@/components/features/icons.jsx';

const ScheduleItemButtons = ({ isСhanging, cancelChanging, name, toggleChanging }) => {
    return (
        <>
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
                    aria-label={'Изменить активность ' + name}
                    onClick={() => { toggleChanging(true) }}>
                    <PencilSVG />
                </button>
            }
            <button className='btn btn-outline-danger'
                //onClick={onDelete}
                type='button'
                aria-label={'Удалить активность ' + name}>
                <BucketSVG />
            </button>
        </>
    )
}

export default ScheduleItemButtons;