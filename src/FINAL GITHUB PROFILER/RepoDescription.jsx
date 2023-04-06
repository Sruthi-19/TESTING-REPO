import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./Load";
import "./githubcss.css";

const RepoDescription = () => {
  const [repoDetails, setRepoDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { reponame, username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/repos/${username}/${reponame}`)
      .then((res) => res.json())
      .then((data) => {
        setRepoDetails(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
        
          <h1>DETAILS</h1>
          <div>
            <p>NAME: {repoDetails.full_name}</p>
            <p>ID: {repoDetails.id}</p>
            <p>VISIBILITY: {repoDetails.visibility}</p>
            <p>
              URL: <a href={repoDetails.url}>{repoDetails.url}</a>
            </p>
            <p>LANGUAGES URL: {repoDetails.languages_url}</p>
            <p>DESCRIPTION: {repoDetails.description}</p>
          </div>
        </>
      )}
    </>
  );
};

export default RepoDescription;
