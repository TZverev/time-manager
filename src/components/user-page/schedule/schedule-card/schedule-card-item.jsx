import React, { useState, useRef, useEffect } from 'react';
import useScheduleCardItem from '@/hooks/user-page/schedule/schedule-card-item.hook.js';
import ScheduleCardSettings from './settings.jsx';
import ScheduleItemLoading from './loading.jsx';
import ScheduleItemButtons from './schedule-item-buttons.jsx';
import { connect } from 'react-redux';
import { checkError } from '@/features/check-error.js';
import deleteSchedule from '@/storage/functions/schedule/delete-schedule.js';

const ScheduleCardItem = ({ item, userId, date, isChangingCard }) => {
    const {
        beginning, modSetBeginning, setBeginning,
        end, modSetEnd, setEnd,
        color, setColor,
        name, setName,
        isСhanging, toggleChanging,
        onSubmit, error,
        isSettings, toggleSettings
    } = useScheduleCardItem(item, userId, date);
    const settingsButton = useRef(null);
    const [settingsPos, setSettingsPos] = useState(0);

    const handleToggleSettings = () => {
        setSettingsPos(settingsButton.current.clientHeight + 5)
        toggleSettings((isSettings) => { return !isSettings })
    }
    const handleCancelChanging = () => {
        modSetBeginning(item.a);
        modSetEnd(item.b);
        setName(item.name);
        setColor(item.color);
        toggleChanging(false);
    }
    const checkBtnError = (error) => {
        if (error) {
            return 'btn-time-error'
        } else {
            return ''
        }
    }

    useEffect(() => {
        if (!isChangingCard) {
            handleCancelChanging()

        }
    }, [isChangingCard])
    return (
        <>
            <form className='input-group'
                onSubmit={onSubmit}>
                <button className={`btn btn-outline-secondary btn-time ${checkBtnError(error)}`}
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
                        toggleSettings={handleToggleSettings}
                    />}
                <input type='color'
                    disabled={!isСhanging}
                    onChange={(e) => { setColor(e.target.value) }}
                    className={`form-control form-control-color ${checkBtnError(error)}`}
                    value={color} />
                <input
                    onChange={(e) => { setName(e.target.value) }}
                    aria-label='Название активности'
                    disabled={!isСhanging}
                    type='text'
                    className={`form-control pl-3 ${checkError(error)}`}
                    value={name}
                />
                {isChangingCard &&
                    <ScheduleItemButtons
                        isСhanging={isСhanging} toggleChanging={toggleChanging}
                        name={name}
                        cancelChanging={handleCancelChanging}
                        onDelete={() => { deleteSchedule(userId, item, date) }}
                    />
                }
                <div className='invalid-feedback'
                    id='inputError'>
                    {error}
                </div>
            </form >
            <ScheduleItemLoading data={item} />
        </>

    )
}

export default connect(
    state => ({
        userId: state.userState.userId
    }),
    dispatch => ({})
)(ScheduleCardItem);