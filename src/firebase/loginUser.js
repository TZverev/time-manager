import firebase from "../firebase";

export const loginUser = async (email, password) => {
    let response = await firebase.auth().signInWithEmailAndPassword(email, password);
    return response
}

export const errorInfo = (error) => {
    if ((error.code === 'auth/wrong-password') || (error.code === 'auth/user-not-found')) {
        return {
            type: 'passError',
            message: 'Неверный email или пароль.'
        }
    } else {
        return {
            type: error.code,
            message: error.message
        }
    }
}