const actions = {
    ADD_LIKEDPOST: "ADD_LIKEDPOST",
    DELETE_LIKEDPOST: "DELETE_LIKEDPOST",

    addLikedPost: (payload) => {
        return {
            type: actions.ADD_LIKEDPOST,
            payload
        }
    },

    deleteLikedPost: (id) => {
        return {
            type: actions.DELETE_LIKEDPOST,
            payload: id
        }
    }
}

export default actions