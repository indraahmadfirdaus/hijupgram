import axios from 'axios'
import actions from './actions'
import env from 'react-dotenv'
const URL = "https://api.unsplash.com"
let options = {
    headers: {
        Authorization: "Client-ID " + env.UNSPLASH_CLIENT_ID
    }
}

export function fetchPhotos() {
    return async (dispatch) => {
        try {
            dispatch(actions.getPhotosBegin())
            const { data } = await axios.get(URL + "/photos?page=1", options)
            console.log('unsplash',data);
            dispatch(actions.getPhotosSuccess(data))
        } catch (error) {
            console.log(error.response)
        }
    }
}

export function fetchPhotosLoadMore(page) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/photos?page=${page}`, options)
            dispatch(actions.getPhotosLoadMore(data))
        } catch (error) {
            console.log(error.response)
        }
    }
}

export function searchPhotos(query) {
    return async (dispatch) => {
        try {
            dispatch(actions.searchPhotosBegin)
            const { data } = await axios.get(`${URL}/search/photos?page=1&query=${query}`, options)
            dispatch(actions.searchPhotosSuccess(data.results))
        } catch (error) {
            console.log(error.response)
        }
    }
}

export function searchPhotosLoadMore(query, page) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/search/photos?page=${page}&query=${query}`, options)
            dispatch(actions.searchPhotosLoadMore(data.results))
        } catch (error) {
            console.log(error.response)
        }
    }
}