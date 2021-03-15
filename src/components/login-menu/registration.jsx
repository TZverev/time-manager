import React from 'react';
import { Link } from 'react-router-dom'


const Registration = () => {
    return (
        <>
            <h3 className='mb-3'>
                Регистрация
            </h3>
            <form className='needs-validation' noValidate>
                <div className='mb-3'>
                    <label
                        className='form-label'
                        htmlFor='validationEmail'>
                        Email
                </label>
                    <input
                        className='form-control'
                        id='validationEmail'
                        type='email'
                        placeholder='Введите email'
                        required
                    />
                </div>
                <div className='row'>
                    <div className='form-group col-sm-6 mb-3'>
                        <label
                            className='form-label'
                            htmlFor='validationFirstPass'>
                            Пароль
                    </label>
                        <input
                            className='form-control'
                            id='validationFirstPass'
                            type='password'
                            placeholder='Введите пароль'
                            required
                        />
                    </div>
                    <div className='form-group col-sm-6 mb-3'>
                        <label
                            className='form-label'
                            htmlFor='validationSecondPass'>
                            Повторите пароль
                     </label>
                        <input
                            className='form-control'
                            id='validationSecondPass'
                            type='password'
                            placeholder='Повторите пароль'
                            required
                        />
                    </div>
                </div>
                <div className='mt-3'>
                    <button
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