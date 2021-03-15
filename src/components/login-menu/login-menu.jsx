import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from './login.jsx'
import Registration from './registration.jsx'
import FogetPassword from './foget-password.jsx'

const LoginMenu = () => {
    return (
        <div className='mt-5 d-flex justify-content-center'>
            <div className='logIn-container border p-4 bg-light'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/registration'>
                        <Registration />
                    </Route>
                    <Route path='/foget_password'>
                        <FogetPassword />
                    </Route>
                    <Redirect to='/login' />
                </Switch>
            </div>
        </div>
    )
}

export default LoginMenu;