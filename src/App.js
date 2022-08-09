import { useEffect, useState } from "react";
import { getPosts } from "../src/api/api";
import { ReactComponent as Icon } from "../src/assets/Rolling.svg";
import "./App.css";
import PostList from "./PostList";
import SearchBar from "./SearchBar";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((data) => {
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="continer">
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      {isLoading ? <Icon /> : <PostList searchResults={searchResults} />}
    </main>
  );
};

export default App;
