"use client";
import { useEffect, useState } from "react";
import { services } from "../utils/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";

const Notes = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadInitialData = async () => {
    setIsLoading(true);
    const posts = await services.getPosts();
    setPosts(posts);
    setIsLoading(false);
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return !isLoading ? (
    <div>
      <h3 className="fs-1 fw-bold text-center m-3">
        <FontAwesomeIcon icon={faBookOpen} className="mx-3" />~ 100 Notes ~
      </h3>
      <div className="d-flex flex-wrap mx-3">
        {posts.length > 0 &&
          posts.map((post, index) => (
            <div
              className="card text-bg-warning m-2"
              style={{ width: "18rem", cursor: "pointer" }}
              key={post.id}
              onClick={() => alert(post.title)}
            >
              <div className="card-body">
                <p className="card-title">
                  <FontAwesomeIcon icon={faNoteSticky} className="mx-3" />
                  <strong>Note - {index+1} : {post.title}</strong>
                </p>
                <hr></hr>
                <p className="card-text">{post.body} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Notes;
