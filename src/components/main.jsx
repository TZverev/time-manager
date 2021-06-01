import React, { useEffect } from 'react';
import LoginMenu from '@/components/login-menu/login-menu.jsx';
import UserPage from '@/components/user-page/user-page.jsx';
import Loading from '@/components/features/loading.jsx';
import { connect } from 'react-redux';
import store from '@/storage/store.js';
import firebase from '@/firebase.js';
import { LOG_IN, LOG_OUT } from '@/storage/actions/auth.actions.js';

const Main = (props) => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                store.dispatch(LOG_IN(user))
            } else {
                store.dispatch(LOG_OUT())
            }
        });
    }, [])
    return (
        <>
            {props.isLoading ?
                <Loading />
                :
                <>
                    {props.isAuth ?
                        <UserPage />
                        :
                        <LoginMenu />
                    }
                </>}
        </>
    )
}

export default connect(
    state => ({
        isLoading: state.user.isLoading,
        isAuth: state.user.isAuthenticated
    }),
    dispatch => ({})
)(Main);