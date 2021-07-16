const actions = {
    ADD_COMMENT: 'ADD_COMMENT',
    GET_COMMENT: 'GET_COMMENT',

    addComment: (payload) => {
        return {
            type: actions.ADD_COMMENT,
            payload
        }
    },

    getComment: () => {
        return {
            type: actions.GET_COMMENT,
        }
    },
}

export default actions