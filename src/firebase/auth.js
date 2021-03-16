import firebase from '@/firebase';

let isLogined;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLogined = true
    } else {
        isLogined = false
    }
});

export default isLogined;

