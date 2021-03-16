import firebase from "../firebase";

export const createUser = async (email, password) => {
    let response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return response
}

export const errorInfo = (error) => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return {
                type: 'emailError',
                message: 'Данный email уже зарегистрирован.'
            };
        case 'auth/invalid-password':
            return {
                type: 'passError',
                message: 'Пароль должен быть длиннее 6 символов'
            };
        default: return {
            type: error.code,
            message: error.message
        }
    }
}