import React from "react";
import { Avatar } from "@material-ui/core";

const Post = (props) => {
  return (
    // post header ==> avatar + username
    // post image
    // username + caption
    <div className="content-container">
      <div className="post">
        <div className="post__header">
          <Avatar
            alt={props.displayName}
            src={props.photoURL}
            className="post__avatar"
          />
          <h3>post header</h3>
        </div>

        <img className="post__img" src={props.link} alt="img" />
        <h3 className="post__caption">
          <span className="post__username">{props.displayName}</span>{" "}
          {props.caption}
        </h3>
      </div>
    </div>
  );
};

export default Post;
