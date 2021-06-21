import { db } from "../firebase";

export const getScheduleFB = async (id, date) => {
    return await db.collection('users')
        .doc(id)
        .collection('schedule')
        .doc(date)
        .get()
}

export const setScheduleFB = async (id, data) => {
    return await db.collection('users')
        .doc(id)
        .collection('schedule')
        .doc(data.date)
        .set(data)
}
