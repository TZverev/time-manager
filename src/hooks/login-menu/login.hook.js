import { useState, useCallback } from "react";
import { loginUser, errorInfo } from '@/firebase/loginUser.js';

export const useLogin = () => {

    const [formError, setFormError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleChangeForm = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        setFormError(null)
    }

    const checkForm = useCallback(() => {
        if (form.password.length < 8) {
            setFormError('Неверный email или пароль')
            return false
        }
        return true
    }, [form])

    const request = useCallback(async () => {
        const isFormError = checkForm();

        if (!isFormError) {
            return
        }

        setIsLoading(true);
        try {
            await loginUser(form.email, form.password);
        } catch (error) {
            let err = errorInfo(error);
            if (err.type === 'passError') {
                setFormError(err.message)
            } else {
                setFormError(`${err.code} : ${err.message}`)
            }
            setIsLoading(false);
        }
    }, [form])

    return {
        form,
        formError,
        isLoading,
        request,
        handleChangeForm,
    }
}