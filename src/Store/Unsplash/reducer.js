import actions from './actions'

const initialState = {
    loading: false,
    error: false,
    data: [],
    single: {},
    searchData: []
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case actions.FETCH_PHOTOS_BEGIN:
            return {
                ...state,
                loading: true,
            }
            case actions.FETCH_PHOTOS_SUCCESS:
                return {
                ...state,
                data: [...payload],
                loading: false
            }
        case actions.FETCH_PHOTOS_LOADMORE:
            return {
                ...state,
                data: [...state.data, ...payload],
                loading: false,
            }
        case actions.FETCH_PHOTO_BEGIN:
            return {
                ...state,
                loading: true,
            }
        case actions.FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                singe: payload,
                loading: false,
            }        
        case actions.SEARCH_PHOTOS_BEGIN:
            return {
                ...state,
                loading: true,
            }
        case actions.SEARCH_PHOTOS_SUCCESS:
            return {
                ...state,
                searchData: payload,
                loading: false
            }
        case actions.SEARCH_PHOTOS_LOADMORE:
            return {
                ...state,
                searchData: [...state.searchData, ...payload],
                loading: false,
            }            
        default:
            return state
    }
}

export default reducer