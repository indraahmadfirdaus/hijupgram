import actions from './actions'

export function addComment(comment) {
    return (dispatch) => {
        dispatch(actions.addComment(comment))
    }
}