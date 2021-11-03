import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./action";

const Posts = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // Caching posts on 60 seconds...
  const getPosts = () => {
    if (new Date().getTime() - state.lastFetch.getTime() >= 60000) {
      dispatch(fetchPosts());
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return state.loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => getPosts()}>Fetch again</button>
    </>
  );
};

export default Posts;
