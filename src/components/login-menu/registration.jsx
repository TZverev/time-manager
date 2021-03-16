import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegistration } from '@/hooks/login-menu/registration.hook';


const Registration = () => {

    const [isShownPass, setIsShownPass] = useState(false);
    const {
        email,
        passwords,
        passError,
        emailError,
        isLoading,
        changePassHandler,
        changeEmailHandler,
        request,
    } = useRegistration();

    const checkError = (error) => {
        if (error) {
            return 'is-invalid'
        } else {
            return ''
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        request()
    }

    const handleChangeShown = (isShow) => {
        setIsShownPass(!isShow)
    }

    return (
        <>
            <h3 className='mb-3'>
                Регистрация
            </h3>
            <form
                onSubmit={onSubmit}
                noValidate>
                <div className=' mb-3'>
                    <label
                        className='form-label'
                        htmlFor='validationEmail'>
                        Email
                    </label>
                    <input
                        onChange={changeEmailHandler}
                        name='email'
                        value={email}
                        className={`form-control ${checkError(emailError)}`}
                        id='validationEmail'
                        type='email'
                        placeholder='Введите email'
                        aria-describedby='emailHelpBlock'
                        required
                    />
                    <div id="emailHelpBlock" className="form-text invalid-feedback mb-3">
                        {emailError ? emailError : ''}
                    </div>
                </div>

                <div className='row'>
                    <div className='form-group col-sm-6'>
                        <label
                            className='form-label'
                            htmlFor='validationFirstPass'>
                            Пароль
                        </label>
                        <input
                            onChange={changePassHandler}
                            name='firstPassInput'
                            value={passwords.firstPassInput}
                            className={`form-control ${checkError(passError)}`}
                            id='validationFirstPass'
                            type={isShownPass ? 'text' : 'password'}
                            placeholder='Введите пароль'
                            aria-describedby='passwordHelpBlock'
                            required
                        />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label
                            className='form-label'
                            htmlFor='validationSecondPass'>
                            Повторите пароль
                     </label>
                        <input
                            onChange={changePassHandler}
                            name='secondPassInput'
                            value={passwords.secondPassInput}
                            className={`form-control ${checkError(passError)}`}
                            id='validationSecondPass'
                            type={isShownPass ? 'text' : 'password'}
                            placeholder='Повторите пароль'
                            aria-describedby='passwordHelpBlock'
                            required
                        />
                    </div>
                </div>
                <div id="passwordHelpBlock"
                    className={`form-text mb-3 ${passError && 'invalid-message'}`}>
                    {passError ? passError : 'Пароль должен быть длиннее 8 символов.'}
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
                <div className='mt-3'>
                    <button
                        disabled={isLoading}
                        type='submit'
                        className='btn btn-outline-primary w-100'
                    >
                        Зарегистрироваться
                    </button>
                    <hr />
                    <Link to='/login'
                        className='btn btn-outline-secondary w-100'>
                        Вход
                    </Link>
                </div>
            </form>
        </>
    )
}

export default Registration;