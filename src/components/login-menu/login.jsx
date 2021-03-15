import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <h3 className='mb-3'>
                Вход
            </h3>
            <form>
                <div className='mb-3'>
                    <label
                        className='form-label'
                        htmlFor='emailInput'
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='emailInput'
                        placeholder='Введите email'
                    />
                    <div>

                    </div>
                </div>
                <div className='mb-3'>
                    <label
                        className='form-label'
                        htmlFor='emailInput'
                    >
                        Пароль
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='passInput'
                        placeholder='Введите пароль'
                    />
                </div>
                <div className='mb-3'>
                    <Link to='/foget_password'>
                        Забыли пароль?
                    </Link>
                </div>
                <button
                    type='submit'
                    className='btn btn-outline-primary w-100'
                >
                    Войти
                </button>
                <hr />
                <Link to='/registration'
                    className='btn btn-outline-secondary w-100'>
                    Зарегистрироваться
                </Link>
            </form>
        </>
    )
}

export default Login;