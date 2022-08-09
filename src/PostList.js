import React from "react";
import Post from "./Post";
const PostList = ({ searchResults }) => {
  return (
    <main>
      {searchResults.length > 0 ? (
        searchResults.map((searchResult) => {
          return <Post key={searchResult.id} post={searchResult} />;
        })
      ) : (
        <article>
          <h1>No results found</h1>
        </article>
      )}
    </main>
  );
};

export default PostList;
