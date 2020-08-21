import React from "react";
import { Avatar } from "@material-ui/core";

const Post = () => {
  return (
    // post header ==> avatar + username
    // post image
    // username + caption
    <div className="content-container">
      <div className="post">
        <div className="post__header">
          <Avatar
            alt="BlankBanshee"
            src="/static/images/avatar/1.jpg"
            className="post__avatar"
          />
          <h3>post header</h3>
        </div>

        <img
          className="post__img"
          src="https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8"
          alt="img"
        />
        <h3 className="post__caption">
          <span className="post__username">BlankBanshee</span> captioooonn
        </h3>
      </div>
    </div>
  );
};

export default Post;
