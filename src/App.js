import React, { Component } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import { connect } from "react-redux";
import { startSetPosts } from "./actions/posts";
// import { setPosts } from "./actions/posts";

export class App extends Component {
  componentDidMount() {
    this.props.startSetPosts();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="posts-container">
          {this.props.posts.map(({ id, user, createdAt, caption, link }) => (
            <Post
              key={id}
              user={user}
              createdAt={createdAt}
              caption={caption}
              link={link}
            />
          ))}
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
