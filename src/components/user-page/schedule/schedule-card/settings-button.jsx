import React from 'react';
import { PencilSVG } from '@/components/features/icons.jsx';


const SettingsButton = ({ today, date }) => {
    return (
        <>
            {date >= today &&
                <button className='btn btn-outline-primary d-flex align-items-center'
                    aria-label='Добавить активность'>
                    <PencilSVG />
                </button>
            }
        </>
    )
}

export default SettingsButton;