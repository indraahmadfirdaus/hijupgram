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
            console.log(data)
            dispatch(actions.getPhotosSuccess(data))
        } catch (error) {
            console.log(error.response)
        }
    }
}