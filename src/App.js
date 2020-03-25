import React, { useState, useEffect } from "react";
import Photos from "./components/Photos";
import Pagination from "./components/Pagination";

import "./App.scss";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      const data = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=39"
      );

      const posts = await data.json();

      setPosts(posts);
      setIsLoading(false);
      console.log(posts);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const previousPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="App">
      <div className="container m-5">
        <div className="row">
          <div className="col">
            <Photos posts={currentPosts} isLoading={isLoading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              nextPage={nextPage}
              previousPage={previousPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

