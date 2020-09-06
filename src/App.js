import React, { Component } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import { connect } from "react-redux";
import { startSetPosts } from "./actions/posts";
import UploadPost from "./components/UploadPost";

export class App extends Component {
  componentDidMount() {
    this.props.startSetPosts();
  }

  render() {
    console.log("prooops", this.props.posts);
    return (
      <div className="App">
        <Header />
        <div className="posts-container">
          <UploadPost />
          {this.props.posts.map(
            ({ id, profile, createdAt, caption, photoURL }) => (
              <Post
                key={id}
                displayName={profile.displayName}
                photoURL={profile.photoURL}
                createdAt={createdAt}
                caption={caption}
                link={photoURL}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToprops = (dispatch) => ({
  startSetPosts: () => dispatch(startSetPosts()),
});

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(App);
