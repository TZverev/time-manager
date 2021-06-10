import React, { useState, useEffect } from 'react';


const ScheduleCardTitle = ({ date, today }) => {
    const [title, setTitle] = useState('');
    useEffect(() => {
        setTitle(titleChanger(date) + new Date(date).toLocaleString('ru',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }))
    }, [date])
    const titleChanger = (date) => {
        if (date === today) {
            return 'Сегодня, '
        }
        if (date === today - (24000 * 3600)) {
            return 'Вчера, '
        }
        if (date === today + (24000 * 3600)) {
            return 'Завтра, '
        }
        return ''
    }
    return (
        <h5 className='card-title'>
            {title}
        </h5>
    )
}

export default ScheduleCardTitle;