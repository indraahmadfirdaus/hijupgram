const actions = {
    FETCH_PHOTOS_BEGIN: "FETCH_PHOTOS_BEGIN",
    FETCH_PHOTOS_SUCCESS: "FETCH_PHOTOS_SUCCESS",
    FETCH_PHOTOS_LOADMORE: "FETCH_PHOTOS_LOADMORE",
    FETCH_PHOTOS_ERROR: "FETCH_PHOTOS_ERROR",
    FETCH_PHOTO_BEGIN: "FETCH_PHOTO_BEGIN",
    FETCH_PHOTO_SUCCESS: "FETCH_PHOTO_SUCCESS",
    SEARCH_PHOTOS_BEGIN: "SEARCH_PHOTOS_BEGIN",
    SEARCH_PHOTOS_SUCCESS: "SEARCH_PHOTOS_SUCCESS",

    getPhotosBegin: () => {
        return {
            type: actions.FETCH_PHOTOS_BEGIN
        }
    },

    getPhotosSuccess: (payload) => {
        return {
            type: actions.FETCH_PHOTOS_SUCCESS,
            payload
        }
    },

    getPhotosError: (error) => {
        return {
            type: actions.FETCH_PHOTOS_ERROR,
            error
        }
    },

    getPhotoSuccess: (payload) => {
        return {
            type: actions.FETCH_PHOTO_SUCCESS,
            payload
        }
    },

    getPhotoBegin: () => {
        return {
            type: actions.FETCH_PHOTO_BEGIN
        }
    },

    searchPhotosBegin: () => {
        return {
            type: actions.SEARCH_PHOTOS_BEGIN
        }
    },

    searchPhotosSuccess: (payload) => {
        return {
            type: actions.SEARCH_PHOTOS_SUCCESS,
            payload
        }
    }
}

export default actions