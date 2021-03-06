import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCESS } from "../actionType";

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
}

export const homeVideosReducer = (prevState= initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case HOME_VIDEOS_SUCCESS:
            return {
                ...prevState,
                videos: prevState.activeCategory === payload.category ? [...prevState.videos, ...payload.videos] : payload.videos,
                loading: false, 
                nextPageToken: payload.nextPageToken, 
                activeCategory: payload.category
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...prevState, loading: false, error: payload
            }
        case HOME_VIDEOS_REQUEST:
            return {
                ...prevState, loading: true,
            }
    
        default:
            return prevState;
    }
}

export const selectedVideoReducer = (state={
    loading: true,
    video: null
}, action) => {
    const {type, payload} = action
    switch (type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state, loading:true
            }
        case SELECTED_VIDEO_SUCESS:
            return {
                ...state, loading: false, video: payload
            }
        case SELECTED_VIDEO_FAIL:
            return {
                ...state, loading: false, video: null, error: payload
            }
        default:
            return state
    }
}