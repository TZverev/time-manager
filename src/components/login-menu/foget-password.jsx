import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usefogetPassword } from '@/hooks/login-menu/fogetPassword.hook.js';

const FogetPassword = () => {
    const {
        email,
        error,
        isLoading,
        request,
        handleChangeEmail
    } = usefogetPassword();

    const [isMessageShown, setIsMessageShown] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        request(() => { setIsMessageShown(true) });
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
                Восстановление пароля
            </h3>
            {isMessageShown ?
                <div>
                    <p>
                        На ваш email отправлено письмо для смены пароля.
                    </p>
                    <Link to='/login'
                        className='btn btn-outline-primary w-100'>
                        Хорошо
                    </Link>
                </div>
                :
                <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label
                            htmlFor='fogetEmailInput'
                            className='form-label'
                        >
                            Email
                    </label>
                        <input
                            required
                            type='email'
                            onChange={(e) => { handleChangeEmail(e) }}
                            value={email}
                            id='fogetEmailInput'
                            className={`form-control ${checkError(error)}`}
                            placeholder='Введите email'
                            aria-describedby="fogetEmailHelpBlock" />
                        <div id="fogetEmailHelpBlock"
                            className={`form-text ${error && 'invalid-message'}`}>
                            {error ? error : 'На вашу почту будет отправлено письмо для смены пароля.'}
                        </div>
                    </div>
                    <button
                        disabled={isLoading}
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
            }
        </>
    )
}

export default FogetPassword;