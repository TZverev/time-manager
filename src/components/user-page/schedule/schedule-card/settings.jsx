import React from 'react';

const ScheduleCardSettings = (props) => {
    return (
        <div className='card mytooltip'
            style={{ top: props.pos }}>
            <div className='card-body'>
                <div className='d-flex'>
                    <div className='me-3'>
                        <label htmlFor='beginning'>
                            Начало:
                        </label>
                        <input type='time'
                            id='beginning'
                            onChange={(e) => { props.setBeginning(e.target.value) }}
                            className='form-control time mb-3'
                            value={props.beginning}
                        />
                    </div>
                    <div>
                        <label htmlFor='end'>
                            Конец:
                        </label>
                        <input type='time'
                            id='end'
                            onChange={(e) => { props.setEnd(e.target.value) }}
                            className='form-control time mb-3'
                            value={props.end} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleCardSettings;