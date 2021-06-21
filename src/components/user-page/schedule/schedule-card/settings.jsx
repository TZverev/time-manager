import React, { useEffect } from 'react';

const ScheduleCardSettings = (props) => {

    const handleCloseSettings = (e) => {
        if (e.code === 'Escape') {
            props.toggleSettings()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleCloseSettings)
        return () => {
            document.removeEventListener('keydown', handleCloseSettings)
        }
    }, []);

    return (
        <>
            <div className='settings-bg'
                onClick={props.toggleSettings} />
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
        </>
    )
}

export default ScheduleCardSettings;