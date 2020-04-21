
export const maxLength = (max) => (value) => {

    if(value?.length > max) return `The message is too big - max ${max} symbols`;
    return undefined
}

export const required = (value) => {

    if (value) return undefined;
    return "Required field!"
}