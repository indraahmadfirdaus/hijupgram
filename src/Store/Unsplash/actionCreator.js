import axios from 'axios'
import actions from './actions'
const URL = "https://api.unsplash.com"
let options = {
    headers: {
        Authorization: "Client-ID " + "agnvr_SY2ZPA88UKTwAagwKYhkUvr2zdxOvm05vRv2Y"
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
            console.log('query from action creator', query);
            const { data } = await axios.get(`${URL}/search/photos?page=1&query=${query}`, options)
            console.log('data from search', data.results)
            dispatch(actions.searchPhotosSuccess(data.results))
        } catch (error) {
            console.log(error.response)
        }
    }
}