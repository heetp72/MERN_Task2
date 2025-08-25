import React from "react";
import "./NewPost.css";

const NewPost = ({ post }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">📝 Your Post</h2>
      <p className="post-text">{post}</p>
    </div>
  );
};

export default NewPost;
