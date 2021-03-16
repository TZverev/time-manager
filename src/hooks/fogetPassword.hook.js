import { useCallback, useState } from "react";
import { fogetPass, errorInfo } from '../firebase/fogetPass.js';


export const usefogetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
        setError(null);
    }

    const emailCheck = useCallback((email) => {
        if (email.length < 8) {
            setError('Введите email.')
            return true
        }
        return false
    }, [email])

    const request = useCallback(async (func) => {
        const isError = emailCheck(email);
        if (isError) {
            return
        }
        setIsLoading(true);
        try {
            await fogetPass(email)
            setIsLoading(false);
            func()
        } catch (error) {
            setError(errorInfo(error))
            setIsLoading(false);
        }

    }, [email, error])

    return {
        email,
        error,
        isLoading,
        handleChangeEmail,
        request
    }
}