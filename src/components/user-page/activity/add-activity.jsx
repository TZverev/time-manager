import React, { useState } from 'react';
import ChooseColor from '@/components/features/choose-color.jsx';

const AddActivity = (props) => {
    const [color, setColor] = useState(() => {
        const randomColor = (min, max) => {
            return min + Math.floor(Math.random() * (max - min + 1))
        };
        return {
            r: randomColor(0, 255),
            g: randomColor(0, 255),
            b: randomColor(0, 255),
        }
    });
    const [isColorSettings, setIsColorSettings] = useState(false);

    const showColorSettings = (state) => {
        setIsColorSettings(!state)
    }

    const onClose = () => {
        props.close()
    }
    return (
        <form>
            <div className='input-group'>
                <input id='activityName'
                    placeholder='Введите название активности'
                    className='form-control'
                    aria-label='Введите название активности' />
                <button onClick={() => { showColorSettings(isColorSettings) }}
                    className='btn btn-color border border-secondary'
                    type='button'>
                    {isColorSettings &&
                        <ChooseColor color={color} onChangeColor={setColor} />
                    }
                    <div className='activity-color-wrapper border rounded'
                        style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }} />
                </button>
                <button className='btn btn-outline-primary'
                    type='submit'>
                    Добавить
                    </button>
                <button className='btn btn-outline-secondary'
                    type='button'
                    onClick={onClose}>
                    Отмена
                </button>
            </div>
        </form>
    )
}

export default AddActivity;