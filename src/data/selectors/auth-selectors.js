

export const loginSelector = (state) => {
    return state.auth.login
}
export const errorMessagesSelector = (state) => {
    return state.auth.errorMessages
}
export const isAuthSelector = (state) => {
    return state.auth.isAuth
}
export const isLoadingSelector = (state) => {
    return state.auth.isLoading
}
export const userIdSelector = (state) => {
    return state.auth.id
}