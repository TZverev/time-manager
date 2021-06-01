import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ActivityItem from './activity-item.jsx';
import AddActivity from './add-activity.jsx';
import { getActivityesFB } from '@/firebase/activitys.js';


const Activity = ({ actyvityes, id, onLoad, isLoading }) => {
    const loading = async (userId) => {
        const response = await getActivityesFB(userId)
        onLoad(response.docs.map((doc) => doc.data()))
    }
    useEffect(() => {
        try {
            loading(id)
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <div className='activity'>
            <h2>
                Активности
            </h2>
            <hr />
            {isLoading ?
                <div className='d-flex justify-content-center'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className='mt-3 mb-3'>
                    <AddActivity />
                    {actyvityes.map((item) => {
                        return <ActivityItem
                            key={item.id}
                            item={item} />
                    })}
                </div>}
        </div>
    )
}

export default connect(
    state => ({
        actyvityes: state.activityReducer.state,
        id: state.user.userId,
        isLoading: state.activityReducer.isLoading
    }),
    dispatch => ({
        onLoad: (activitys) => {
            dispatch({
                type: 'LOAD_ACTIVITYES',
                activitys: activitys
            })
        }
    })
)(Activity);