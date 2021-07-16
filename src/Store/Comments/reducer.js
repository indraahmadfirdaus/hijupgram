import actions from './actions'

const initialState = {
    comments: []
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case actions.ADD_COMMENT:
            return { comments: [...state.comments, payload ] }
        case actions.GET_COMMENT:
            return state
        default:
            return state
    }
}

export default reducer