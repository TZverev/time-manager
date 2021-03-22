import React, { useState } from 'react';
import { connect } from 'react-redux';
import ActivityItem from './activity-item.jsx';
import AddActivity from './add-activity.jsx';
import { PlusCircleSVG } from '@/components/features/icons.jsx';


const Activity = (props) => {
    const [isAddition, setIsAddition] = useState(false);

    return (
        <div className='activity'>
            <h2>
                Активности
            </h2>
            <hr />
            <div className='mt-3 mb-3'>
                {isAddition ?
                    <AddActivity close={() => { setIsAddition(false) }} />
                    :
                    <button className='btn btn-outline-primary d-flex align-items-center'
                        onClick={() => { setIsAddition(true) }}>
                        <PlusCircleSVG />
                        <span className='ms-2'>
                            Добавить активность
                        </span>
                    </button>}
                <div>
                    {props.actyvityes.map((item) => {
                        return <ActivityItem
                            key={item.id}
                            item={item}
                            onDeleteActivity={props.onDeleteActivity} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        actyvityes: state.activityReducer
    }),
    dispatch => ({
        onDeleteActivity: (activity) => {
            dispatch({
                type: 'DELETE_ACTIVITY',
                activity: activity
            })
        }
    })
)(Activity);