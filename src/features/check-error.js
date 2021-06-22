export const checkError = (error) => {
    if (error) {
        return 'is-invalid'
    } else {
        return ''
    }
}