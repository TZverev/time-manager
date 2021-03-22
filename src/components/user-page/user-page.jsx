import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Schedule from './schedule.jsx';
import Settings from './settings.jsx';
import Activity from './activity/activity.jsx';
import Navigation from './navigation.jsx';

const UserPage = () => {
    return (
        <div className='container d-flex align-items-start mt-5'>
            <Switch>
                <Route path='/schedule'>
                    <Navigation state='schedule'>
                        <Schedule />
                    </Navigation>
                </Route>
                <Route path='/activity'>
                    <Navigation state='activity'>
                        <Activity />
                    </Navigation>
                </Route>
                <Route path='/settings'>
                    <Navigation state='settings'>
                        <Settings />
                    </Navigation>
                </Route>
                <Redirect to='/schedule' />
            </Switch>
        </div>
    )
}

export default UserPage;