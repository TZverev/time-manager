import React from 'react';
import { PencilSVG } from '@/components/features/icons.jsx';


const SettingsButton = ({ today, date, toggleChanging }) => {
    return (
        <>
            {date >= today &&
                <button className='btn btn-outline-primary d-flex align-items-center  me-3'
                    onClick={toggleChanging}
                    aria-label='Добавить активность'>
                    <PencilSVG />
                </button>
            }
        </>
    )
}

export default SettingsButton;