import * as axios from "axios";
import authHeader from "./authHeader";

const instance = axios.create({
    withCredentials:true,
    headers: {"API-KEY": "b9dfa963-a61f-44fb-a608-1b5bd2736b14"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

const jsonInstance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const peoplesApi = {

    // getUsers (currentPage, pageSize) {
    //     return (
    //         instance.get(`users?page=${currentPage}&count=${pageSize}`)
    //         .then( response => {return response.data})
    //     )
    // },

    getUsers( ) {
        return (
            jsonInstance.get(`peoples`, {headers: {'Authorization': authHeader()}})
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
            axios.get(`http://localhost:3001/auth/me`, {headers: {'Authorization': authHeader()}})
            .then(response => {return response.data})
        )
    },

    loginForm({email, pass}) {
        return (
            axios.post(`http://localhost:3001/auth/login`, {email:email, password:pass})
        )
    },

    logOutUser() {
        return (
            axios.delete(`http://localhost:3001/auth/logout`, {headers: {'Authorization': authHeader()}})
        )
    }
}

export const profileApi = {

    getProfile(userId) {
        return (
            jsonInstance.get(`profile/` + userId, {headers: {'Authorization': authHeader()}})
            .then(response => {return response.data})
        )
    },

    getStatus(userId) {
        return (
            jsonInstance.get(`profile/${userId}/status`, {headers: {'Authorization': authHeader()}})
            .then(response => {return response.data})
        )
    },

    updateStatus(status,userId) {
        return (
            jsonInstance.put(`status/${userId}`, {text: status}, {headers: {'Authorization': authHeader()}})
            .then(response => {return response.data})
        )
    },

    updateProfile(profile) {
        return (
            jsonInstance.put(`/profile`, profile, {headers: {'Authorization': authHeader()}})
            .then(response => {return response.data})
        )
    },

    updateUserPhoto(photo) {

        const formData = new FormData();
        formData.append('image', photo);

        return (
            instance.put(`/profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        )
    },

    getPosts(userId) {
        return ( jsonInstance.get(`posts/${userId}`, {headers: {'Authorization': authHeader()}}) )
    }
}

export const dialogsApi = {

    getMessages() {
        return (
            jsonInstance.get(`messages`, {headers: {'Authorization': authHeader()}})
        )
    },

    newMessage(message) {
        return (
            jsonInstance.post(`messages/`, message, {headers: {'Authorization': authHeader()}})
        )
    },

    deleteMessage(id) {
        return (
            jsonInstance.delete(`messages/${id}`, {headers: {'Authorization': authHeader()}})
        )
    }
}