import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { firebase } from "@firebase/app";
import { storage } from "../firebase/firebase";
import { startAddPost } from "../actions/posts";

class UploadPost extends Component {
  state = {
    file: null,
    caption: "",
    progress: 0,
    error: null,
  };

  handleCaption = (e) => {
    this.setState({ caption: e.target.value });
  };

  handleFile = (e) => {
    if (e.target.files[0]) {
      this.setState({ file: e.target.files[0] });
    }
  };

  handleUpload = (e) => {
    e.preventDefault();
    const imageID = uuidv4();
    const upload = storage.ref(`images/${imageID}`).put(this.state.file);
    upload.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        this.setState({ error: error.message });
      },
      () => {
        storage
          .ref("images")
          .child(imageID)
          .getDownloadURL()
          .then((URL) => {
            const createdAt = firebase.firestore.FieldValue.serverTimestamp();
            this.props.startAddPost(
              URL,
              this.state.caption,
              createdAt,
              this.props.profile
            );
          });
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleUpload}>
          <input type="file" onChange={this.handleFile}></input>
          <input
            type="text"
            value={this.state.caption}
            onChange={this.handleCaption}
            placeholder="Enter a caption"
          ></input>
          <button>Post</button>
          {!!this.state.error && <p>Something went wrong please try again</p>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: {
    ...state.profile,
    uid: state.auth.uid,
  },
});

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (photoURL, caption, createdAt, profile) =>
    dispatch(startAddPost({ photoURL, caption, createdAt, profile })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPost);
