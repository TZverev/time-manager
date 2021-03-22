import React from 'react';


const ChooseColor = ({ color, onChangeColor }) => {
    const onHandleChangeColor = (event) => {
        onChangeColor({
            ...color, [event.target.name]: Number(event.target.value)
        })
    }

    return (
        <div className='p-4 choose-color border rounded'>
            <span className='mb-1'>
                Цвет
            </span>
            <div className='color-block border rounded mb-3'
                style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }} />
            <div className='d-flex flex-column input-wrapper'>
                <label htmlFor="redRange"
                    className="form-label">
                    Красный
                </label>
                <input
                    onChange={(event) => { onHandleChangeColor(event) }}
                    value={color.r}
                    type="range"
                    name='r'
                    className="form-range"
                    min="0" max="255" step='1'
                    id="redRange" />
                <label htmlFor="greenRange"
                    className="form-label">
                    Зеленый
                </label>
                <input
                    onChange={(event) => { onHandleChangeColor(event) }}
                    value={color.g}
                    type="range"
                    name='g'
                    className="form-range"
                    min="0" max="255" step='1'
                    id="redRange" />
                <label htmlFor="blueRange"
                    className="form-label">
                    Синий
                </label>
                <input
                    onChange={(event) => { onHandleChangeColor(event) }}
                    value={color.b}
                    type="range"
                    name='b'
                    className="form-range"
                    min="0" max="255" step='1'
                    id="blueRange" />
            </div>
            <div>
                <button className='btn btn-outline-primary mt-3 me-3'>
                    Сохранить
            </button>
                <button className='btn btn-outline-secondary mt-3'>
                    Отмена
            </button>
            </div>
        </div>
    )
}

export default ChooseColor;