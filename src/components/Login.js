import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const Login = (props) => {
  return (
    <div className="Login-container">
      <button
        onClick={props.dispatch(startLogin)}
        className="button button--login"
      >
        Login
      </button>
    </div>
  );
};

export default connect()(Login);
