import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


//GITHUB
import Home from "./FINAL GITHUB PROFILER/Home";
import Dashboard from "./FINAL GITHUB PROFILER/Dashboard";
import Followers from "./FINAL GITHUB PROFILER/Followers";
import RepoDescription from "./FINAL GITHUB PROFILER/RepoDescription";

const router = createBrowserRouter([

{
  path:"/",
  element:<Home/>
},
{
  path:"dashboard/:username",
  caseSensitive: true,
  element:<Dashboard/>
},
{
  path:"followers/:username",
  caseSensitive: true,
  element:<Followers/>
},
{
  path:"repos/:username/:reponame",
  caseSensitive: true,
  element:<RepoDescription/>
},

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

