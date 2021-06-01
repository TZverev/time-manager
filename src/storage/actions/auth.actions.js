export const LOG_IN = (user) => {
    return {
        type: 'LOG_IN',
        user: user
    }
}

export const LOG_OUT = () => {
    return {
        type: 'LOG_OUT'
    }
}