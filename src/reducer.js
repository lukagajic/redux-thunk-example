const initState = {
  loading: false,
  error: null,
  items: [],
  lastFetch: new Date()
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loading: false,
        lastFetch: new Date()
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        error: action.error,
        loading: false,
        items: []
      };
    default:
      return state;
  }
};

export default postsReducer;
