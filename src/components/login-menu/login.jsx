import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '@/hooks/login-menu/login.hook.js';

const Login = () => {
    const [isShownPass, setIsShownPass] = useState(false);
    const {
        form,
        formError,
        isLoading,
        request,
        handleChangeForm,
    } = useLogin();

    const handleChangeShown = (isShow) => {
        setIsShownPass(!isShow)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        request();
    }

    const checkError = (error) => {
        if (error) {
            return 'is-invalid'
        } else {
            return ''
        }
    }

    return (
        <>
            <h3 className='mb-3'>
                Вход
            </h3>
            <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label
                        className='form-label'
                        htmlFor='emailInput'
                    >
                        Email
                    </label>
                    <input
                        value={form.email}
                        onChange={(e) => { handleChangeForm(e) }}
                        name='email'
                        type='email'
                        className={`form-control ${checkError(formError)}`}
                        id='emailInput'
                        placeholder='Введите email'
                        aria-describedby='passwordHelpBlock'
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
                        value={form.password}
                        onChange={(e) => { handleChangeForm(e) }}
                        type={isShownPass ? 'text' : 'password'}
                        name='password'
                        className={`form-control ${checkError(formError)}`}
                        id='passInput'
                        placeholder='Введите пароль'
                        aria-describedby='passwordHelpBlock'
                    />
                    <div id="passwordHelpBlock"
                        className={`form-text mb-3 ${formError && 'invalid-message'}`}>
                        {formError ? formError : ''}
                    </div>
                    <div className='form-check mb-3'>
                        <input
                            onChange={() => { handleChangeShown(isShownPass) }}
                            className='form-check-input'
                            type='checkbox'
                            id='showCheckboxInput' />
                        <label
                            className='form-check-label'
                            htmlFor='showCheckboxInput'>
                            Показать пароль
                    </label>
                    </div>
                </div>
                <div className='mb-3'>
                    <Link to='/foget_password'>
                        Забыли пароль?
                    </Link>
                </div>
                <button
                    aria-disabled={isLoading}
                    disabled={isLoading}
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