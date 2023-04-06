import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./githubcss.css";
import Logo from "./github-mark.png"

const Home = () => {
  const [input, setInput] = useState("");

  return (
    <div id="home-page">
      <img width={90} src={Logo} />
      <h1>Search for a GitHub user!</h1>

      <div id="input-button">
      <input
        id="input-box"
        placeholder="enter username"
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <Link to={`/dashboard/${input}`}>
        <button>Search</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
