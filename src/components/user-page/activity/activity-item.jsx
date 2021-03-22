import React, { useState } from 'react';
import { PencilSVG, BucketSVG } from '@/components/features/icons.jsx';
import ChooseColor from '@/components/features/choose-color.jsx';

const ActivityItem = ({ item, onDeleteActivity }) => {

    const [color, setColor] = useState(item.color)

    const [isColorSettings, setIsColorSettings] = useState(false);

    const showColorSettings = (state) => {
        setIsColorSettings(!state)
    }
    return (
        <div className='d-flex justify-content-between rounded border mt-3 p-2'>
            <div className='d-flex align-items-center'>
                <div>
                    <button onClick={() => { showColorSettings(isColorSettings) }}
                        className='activity-color-wrapper border rounded'
                        style={{ backgroundColor: `rgb(${item.color.r},${item.color.g},${item.color.b})` }}
                        aria-label='Поменять цевт активности' />
                    {isColorSettings &&
                        <ChooseColor color={color} onChangeColor={setColor} />
                    }
                </div>
                <div className='ms-3'>
                    {item.activity}
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <button className='btn-i btn-i-primary'
                    aria-label='Изменить активность'>
                    <PencilSVG />
                </button>
                <button className='btn-i btn-i-danger'
                    aria-label='Удалить активность'
                    onClick={() => { onDeleteActivity(item) }}>
                    <BucketSVG />
                </button>
            </div>
        </div>
    )
}

export default ActivityItem;