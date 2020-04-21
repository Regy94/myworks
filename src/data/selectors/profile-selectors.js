
export const profileSelector = (state) => {
    return state.profilePage.profile
}

export const isLoadingSelector = (state) => {
    return state.profilePage.isLoading
}
export const statusSelector = (state) => {
    return state.profilePage.status
}
export const isStatusLoadingSelector = (state) => {
    return state.profilePage.isStatusLoading
}
export const postsSelector = (state) => {
    return state.profilePage.posts
}

export const errorUpdateProfileSelector = (state) => {
    return state.profilePage.errorUpdateProfile
}

export const toggleProfileUpdateLoadingSelector = (state) => {
    return state.profilePage.isProfileUpdateLoading
}