import axios from "axios";

export const fetchPosts = (dispatch) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "FETCH_POSTS_REQUEST"
    });

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      dispatch({
        type: "FETCH_POSTS_SUCCESS",
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: "FETCH_POSTS_FAILURE",
        error: err.message
      });
    }
  };
};
