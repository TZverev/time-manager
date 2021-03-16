import firebase from "../firebase";

export const fogetPass = async (email) => {
    let response = await firebase.auth().sendPasswordResetEmail(email);
    return response
}

export const errorInfo = (error) => {
    switch (error.code) {
        case 'auth/invalid-email': return 'Неверный формат email.';
        case 'auth/user-not-found': return 'Пользователь с таким email не найден.'
        default: return `${error.code} : ${error.message}`
    }
}