import React from "react";
import { Link, useParams } from "react-router-dom";
import "./githubcss.css";
import { useState, useEffect } from "react";
import LoadingSpinner from "./Load";

const Followers = () => {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}/followers`)
      .then((res) => res.json())
      .then((data) => {
        setFollowers(data);
        setIsLoading(false);
      });
  }, [username]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>Followers</h1>
          <div id="followers-list-overall">
            {followers.map((item) => {
              return (
                <div id="followers-container">
                  <img style={{ width: "80px" }} src={item.avatar_url}></img>
                  <div id="followers-container-sub">
                    <h6 id="h1">{item.login}</h6>
                    <Link to={`/dashboard/${item.login}`}>
                      <button>About</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Followers;
