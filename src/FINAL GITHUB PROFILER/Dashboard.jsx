import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "./Load";
import "./githubcss.css";

const Dashboard = () => {
  const [repoList, setRepoList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const { username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    console.log("use effect called");
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepoList(data);
        setIsLoading(false);
        setCurrentUser(data[0].owner);
      });
  }, [username]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div id="dashboard">
          <div id="user-info-overall">
            {/* <h1 id="h1">USERINFO</h1> */}
            <div id="user-info-sub">
              <img id="img" src={currentUser.avatar_url}></img>
              <div id="username-follower">
              <h2 id="h1">{currentUser.login}</h2>
              <Link to={`/followers/${username}`}>
                <button id="button">Followers</button>
              </Link>
              </div>
            </div>
          </div>
          <br></br>
          <div id="repos-overall">
            {repoList.map((item) => {
              return (
                <Link to={`/repos/${username}/${item.name}`}>
                  <div id="repo-container" key={item.id}>
                    <div>{item.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
