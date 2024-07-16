import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_FAILURE,
} from "../../../../constant/data";


const initialState = {
    blogs: [],
    loading: false,
    error: null,
};

const BlogReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_BLOG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BLOG_SUCCESS:
            return{
                ...state,
                loading: false,
                blogs: action.payload,
            };
        case FETCH_BLOG_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default BlogReducer;