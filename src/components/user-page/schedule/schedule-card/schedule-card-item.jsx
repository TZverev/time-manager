import React, { useState, useRef } from 'react';
import useScheduleCardItem from '@/hooks/user-page/schedule/schedule-card-item.hook.js';
import ScheduleCardSettings from './settings.jsx';
import ScheduleItemLoading from './loading.jsx';
import ScheduleItemButtons from './schedule-item-buttons.jsx';

const ScheduleCardItem = ({ item }) => {
    const {
        beginning, modSetBeginning, setBeginning,
        end, modSetEnd, setEnd,
        color, setColor,
        name, setName,
    } = useScheduleCardItem(item);
    const settingsButton = useRef(null);
    const [isСhanging, toggleChanging] = useState(false);
    const [isSettings, toggleSettings] = useState(false);
    const [settingsPos, setSettingsPos] = useState(0);

    const handleToggleSettings = () => {
        setSettingsPos(settingsButton.current.clientHeight + 5)
        toggleSettings((isСhanging) => { return !isСhanging })
    }
    const handleCancelChanging = () => {
        modSetBeginning(item.a);
        modSetEnd(item.b);
        setName(item.name);
        setColor(item.color);
        toggleChanging(false);
    }
    return (
        <>
            <form className='input-group'>
                <button className='btn btn-outline-secondary btn-time'
                    disabled={!isСhanging}
                    ref={settingsButton}
                    onClick={handleToggleSettings}
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
                <ScheduleItemButtons
                    isСhanging={isСhanging} toggleChanging={toggleChanging}
                    name={name}
                    cancelChanging={handleCancelChanging}
                //onDelete={}
                />
            </form >
            <ScheduleItemLoading data={item} />
        </>

    )
}

export default ScheduleCardItem;