import React from "react";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handelChange = (e) => {
    const value = e.target.value;
    if (!value) setSearchResults(posts);
    setSearchResults(
      posts.filter(
        (post) => post.title.includes(value) || post.body.includes(value)
      )
    );
  };

  return (
    <header>
      <form
        style={{ width: "100%", height: "25px", margin: "10px 0" }}
        onSubmit={handleSubmit}
      >
        <input
          style={{ width: "inherit", height: "inherit", padding: "5px" }}
          type="text"
          placeholder="search something..."
          onChange={handelChange}
        />
        <button type="submit" style={{ display: "none" }}>
          submit
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
