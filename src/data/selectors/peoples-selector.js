

export const peoplesSelector = (state) => {
    return state.peoplesPage.peoples
}
export const usersTotalCountSelector = (state) => {
    return state.peoplesPage.usersTotalCount
}
export const currentPageSelector = (state) => {
    return state.peoplesPage.currentPage
}
export const pageSizeSelector = (state) => {
    return state.peoplesPage.pageSize
}
export const isLoadingSelector = (state) => {
    return state.peoplesPage.isLoading
}
export const disableIDsSelector = (state) => {
    return state.peoplesPage.disableIDs
}