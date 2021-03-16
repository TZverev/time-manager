import { useState, useCallback } from "react";
import { createUser, errorInfo } from '@/firebase/createUser.js';

export const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const useRegistration = () => {
    const [email, setEmail] = useState('');
    const [passwords, setPasswords] = useState({ firstPassInput: '', secondPassInput: '' });
    const [passError, setPassError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const changePassHandler = (event) => {
        setPasswords({
            ...passwords, [event.target.name]: event.target.value
        })
        setPassError(null)
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value)
        setEmailError(null)
    }

    const checkEmail = useCallback(() => {
        if (email === '') {
            setEmailError('Введите email.')
            return false
        }
        if (!re.test(email)) {
            setEmailError('Неверный формат email.')
            return false
        }
        return true
    }, [email])

    const checkPassword = useCallback(() => {
        if (passwords.firstPassInput === '') {
            setPassError('Введите пароль.')
            return false
        }
        if (passwords.firstPassInput.length < 8) {
            setPassError('Пароль должен быть длиннее 8 символов.')
            return false
        }
        if (passwords.firstPassInput !== passwords.secondPassInput) {
            setPassError('Пароли не совпадают.')
            return false
        }
        return true
    }, [passwords])

    const request = useCallback(async () => {
        const isEmailError = checkEmail();
        const isPassError = checkPassword();

        if (!isEmailError || !isPassError) {
            return
        }
        setIsLoading(true);
        try {
            const userCredential = await createUser(email, passwords.firstPassInput)
            console.log(userCredential.user);
            setIsLoading(false);
        } catch (error) {
            let err = errorInfo(error);
            if (err.type === 'emailError') {
                setEmailError(err.message)
            } else
                if (err.type === 'passError') {
                    setPassError(err.message)
                } else {
                    setPassError(`${err.type} : ${err.message}`)
                }
            setIsLoading(false);
        }
    }, [email, passwords, passError, emailError])

    return ({
        email,
        passwords,
        passError,
        emailError,
        isLoading,
        changePassHandler,
        changeEmailHandler,
        request,
    })

}