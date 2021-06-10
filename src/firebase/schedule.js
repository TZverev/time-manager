import { db } from "../firebase";

export const getScheduleFB = async (id, date) => {
    return await db.collection('users')
        .doc(id)
        .collection('schedule')
        .doc(date)
        .get()
}

