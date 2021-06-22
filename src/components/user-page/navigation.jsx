import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '@/firebase.js';

const Navigation = ({ state, children }) => {
    const logOut = async () => {
        try {
            await firebase.auth().signOut()
        } catch (error) {
            console.log('Ошибка при загрузке ' + error)
        }
    }
    return (
        <>
            <div className='nav flex-column nav-pills m-3'
                aria-orientation='vertical'>
                <Link className={`nav-link ${(state === 'schedule') ? 'active' : ''}`}
                    to='/schedule'>
                    Расписание
                </Link>
                <Link className={`nav-link ${(state === 'activity') ? 'active' : ''}`}
                    to='/activity'>
                    Активности
                </Link>
                <Link className={`nav-link ${(state === 'settings') ? 'active' : ''}`}
                    to='/settings'>
                    Настройки
                </Link>
                <hr />
                <button className='btn btn-outline-danger mt-3'
                    onClick={logOut}>
                    Выход
            </button>
            </div>
            <div className='m-3 p-4 bg-white border rounded content-contanier'>
                {children}
            </div>

        </>
    )
}

export default Navigation;