"use client";
import { useEffect, useState } from "react";
import { services } from "../utils/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Notes = () => {
  const [posts, setPosts] = useState([]);

  const loadInitialData = async () => {
    const posts = await services.getPosts();
    setPosts(posts);
    console.log(posts); // Logging after data is set
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <div>
      <h3 className="d-flex justify-content-center m-3">
        <FontAwesomeIcon icon={faBookOpen} className="mx-3" />
        This is a Notes page!
      </h3>
      <div className="d-flex flex-wrap mx-3">
        {posts.length > 0 &&
          posts.map((post) => (
            <div
              className="card text-bg-warning m-2"
              style={{ width: "18rem", cursor: "pointer" }}
              key={post.id}
              onClick={() => alert(post.title)}
            >
              <div className="card-body">
                <p className="card-title">
                  <FontAwesomeIcon icon={faNoteSticky} className="mx-3" />
                  <strong>{post.title}</strong>
                </p>
                <hr></hr>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notes;
