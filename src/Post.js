import React from "react";

const Post = ({ post }) => {
  return (
    <article
      key={post.id}
      style={{ background: "lightblue", margin: "10px 0", padding: "0px 10px" }}
    >
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </article>
  );
};

export default Post;
