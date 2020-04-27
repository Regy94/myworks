import * as axios from "axios";

const instance= axios.create({
    withCredentials:true,
    headers: {"API-KEY": "b9dfa963-a61f-44fb-a608-1b5bd2736b14"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const peoplesApi = {

    getUsers (currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => {return response.data})
        )
    },

    getNewPage (page, pageSize) {
        return (
            instance.get(`users?page=${page}&count=${pageSize}`)
            .then( response => {return response.data})
        )
    }
}

export const peopleApi = {

    followUser(id) {
        return(
            instance.post(`follow/${id}`)
            .then(response => {return response.data})
        )
    },

    unfollowUser(id) {
        return(
            instance.delete(`follow/${id}`)
            .then(response => {return response.data})
        )
    }
}

export const authApi = {

    loginUser() {
        return (
            instance.get(`auth/me`)
            .then(response => {return response.data})
        )
    },

    loginForm({email, pass, remember}) {
        return (
            instance.post(`/auth/login`, {email:email, password:pass, rememberMe:remember})
            .then(response => {return response.data})
        )
    },

    logOutUser() {
        return (
            instance.delete(`/auth/login`)
            .then(response => {return response.data})
        )
    }
}

export const profileApi = {

    getProfile(userId) {
        return (
            instance.get(`profile/` + userId)
            .then(response => {return response.data})
        )
    },

    getStatus(userId) {
        return (
            instance.get(`/profile/status/` + userId)
            .then(response => {return response.data})
        )
    },

    updateStatus(status) {
        return (
            instance.put(`/profile/status`, {status: status})
            .then(response => {return response.data})
        )
    },

    updateProfile(profile) {
        return (
            instance.put(`/profile`, profile)
        )
    },

    updateUserPhoto(photo) {

        const formData = new FormData();
        formData.append('image', photo);

        return (
            instance.put(`/profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        )
    }
}