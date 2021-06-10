import React, { useState, useRef } from 'react';
import useScheduleCardItem from '@/hooks/user-page/schedule/schedule-card-item.hook.js';
import ScheduleCardSettings from './settings.jsx';
import ScheduleItemLoading from './loading.jsx';

const ScheduleCardItem = ({ item }) => {
    const {
        beginning,
        setBeginning,
        end,
        setEnd,
        color,
        setColor,
        name,
        setName,
    } = useScheduleCardItem(item);
    const settingsButton = useRef(null);
    const [isСhanging, setIsChanging] = useState(true);
    const [isSettings, setIsSettings] = useState(false);
    const [settingsPos, setSettingsPos] = useState(0);

    const handleClick = () => {
        setSettingsPos(settingsButton.current.clientHeight + 5)
        setIsSettings((isСhanging) => { return !isСhanging })
    }
    return (
        <>
            <form className='input-group'>
                <button className='btn btn-outline-secondary btn-time'
                    disabled={!isСhanging}
                    ref={settingsButton}
                    onClick={handleClick}
                    type='button'>
                    {beginning + '-' + end}
                </button>
                {isSettings &&
                    <ScheduleCardSettings
                        pos={settingsPos}
                        beginning={beginning}
                        setBeginning={setBeginning}
                        end={end}
                        setEnd={setEnd}
                    />}
                <input type='color'
                    disabled={!isСhanging}
                    onChange={(e) => { setColor(e.target.value) }}
                    className='form-control form-control-color '
                    value={color} />
                <input
                    onChange={(e) => { setName(e.target.value) }}
                    aria-label='Название активности'
                    disabled={!isСhanging}
                    type='text'
                    className='form-control pl-3'
                    value={name}
                />
            </form >
            <ScheduleItemLoading data={item} />
        </>

    )
}

export default ScheduleCardItem;