import actions from './actions'

export function addLikedPost(payload) {
    return (dispatch) => {
        dispatch(actions.addLikedPost(payload))
    }
}

export function deleteLikedPost(id) {
    return (dispatch) => {
        dispatch(actions.deleteLikedPost(id))
    }
}