import { LOAD_POSTS, REMOVE_POST, TOOGLE_BOOKED } from "../types"

const initialState = {
    allPosts: [],
    bookedPosts: []
}

const handlers = {
    [LOAD_POSTS]: (state, {payload}) => ({
        ...state, 
        allPosts: payload,
        bookedPosts: payload.filter(i => i.booked)
    }),
    [TOOGLE_BOOKED]: (state, {payload}) => {
        const allPosts = state.allPosts.map(i => {
            if (i.id === payload) {
                i.booked = !i.booked
            }
            return i
        })

        return {...state, allPosts, bookedPosts: allPosts.filter(i => i.booked)}
    },
    [REMOVE_POST]: (state, {payload}) => ({
        ...state,
        allPosts: state.allPosts.filter(i => i.id !== payload),
        bookedPosts: state.bookedPosts.filter(i => i.id !== payload),
    }),
    DEFAULT: state => state
}

const postResucer = (state=initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export default postResucer