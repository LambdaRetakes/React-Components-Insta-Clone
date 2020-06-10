//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data';


const PostsPage = () => {
  const [data, setData] = useState(dummyData);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {data.map((post, index) => {
        return <Post post={post} key={index} />
      })}
    </div>
  );
};

export default PostsPage;
