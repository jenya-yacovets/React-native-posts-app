import { LOAD_POSTS } from "../types"

const initialState = {
    allPosts: [],
    bookedPosts: []
}

const handlers = {
    [LOAD_POSTS]: (state, action) => ({
        ...state, 
        allPosts: action.payload,
        bookedPosts: action.payload.filter(i => i.booked)
    }),
    DEFAULT: state => state
}

const postResucer = (state=initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export default postResucer