import { db } from "../firebase";

export const getActivityesFB = async (userID) => {
    return await db.collection('users')
        .doc(userID)
        .collection('activityes')
        .get()
}

export const setActivityFB = async (userID, activity) => {
    return await db.collection('users')
        .doc(userID)
        .collection('activityes')
        .doc(activity.id)
        .set(
            activity
        )
}

export const deleteActivityFB = async (userID, activity) => {
    return await db.collection('users')
        .doc(userID)
        .collection('activityes')
        .doc(activity.id)
        .delete()
}
