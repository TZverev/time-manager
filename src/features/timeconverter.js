const timeConverter = (str, day) => {
    if (!str) {
        return
    }
    let hour = +str.match(/^..(?=:)/)
    let minutes = +str.match(/(?<=:)..$/)
    return new Date(day).setHours(hour, minutes, 0, 0)
}

export default timeConverter;