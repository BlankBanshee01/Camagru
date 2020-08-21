import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Header from "./components/Header";
import Post from "./components/Post";

const jsx = (
  <div>
    <Header />
    <div className="posts-container">
      <Post />
      <Post />
      <Post />
    </div>
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));
