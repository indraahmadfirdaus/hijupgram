import actions from './actions'

const initialState = {
    likedPosts: []
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case actions.ADD_LIKEDPOST:
            return {
                likedPosts: [...state.likedPosts, payload]
            }
        case actions.DELETE_LIKEDPOST:
            return {
                likedPosts: state.likedPosts.filter(post => post.id !== payload)
            }    
        default:
            return state
    }
}

export default reducer