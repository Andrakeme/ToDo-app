export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined
}

export const requiered = (value) => {
    if (value) return undefined

    return 'You can`t add empty task'
}