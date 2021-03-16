import React from 'react';
import { Link } from 'react-router-dom';

const FogetPassword = () => {
    return (
        <>
            <h3 className='mb-3'>
                Восстановить пароль
            </h3>
            <form>
                <div className='mb-3'>
                    <label
                        htmlFor='fogetEmailInput'
                        className='form-label'
                    >
                        Email
                    </label>
                    <input
                        id='fogetEmailInput'
                        className='form-control'
                        placeholder='Введите email'
                        aria-describedby="fogetEmailHelpBlock" />
                    <div id="fogetEmailHelpBlock"
                        className="form-text">
                        На вашу почту будет отправлено письмо для смены пароля.
                    </div>
                </div>
                <button
                    type='submit'
                    className='btn btn-outline-primary w-100'>
                    Восстановить
                </button>
                <hr />
                <Link to='/login'
                    className='btn btn-outline-secondary w-100'>
                    Назад
                </Link>
            </form>
        </>
    )
}

export default FogetPassword;