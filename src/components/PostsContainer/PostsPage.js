//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import dummyData here on the parent component
import dummyData from '../../dummy-data';


const PostsPage = () => {
  const [data, setData] = useState(dummyData); //set dummyData to our state
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
    {/* render a Post component for item in our dummy data as a post, and set the post props object to the individual post */}
      {data.map((post) => {
        return <Post post={post} />
      })}
    </div>
  );
};

export default PostsPage;
