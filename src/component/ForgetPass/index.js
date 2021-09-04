import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Input, notification } from "antd";

import "./style.css";

class Forgetpass extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    }
  }
  sign = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.email))
      notification.warning({
        message: "Warning!",
        description: "Please enter in email format",
        duration: 2,
        style: { background: "#ffffcc" }
      })
    else {
      console.log("email format");
    }
  }
  render() {
    return (
      <div className="forget-pass-index-root">
        <Header />
        <div className="pass-header-text">
          SIGN IN
          <div className="small-header">User Your Google Account</div>
        </div>
        <div className="forget-pass-container">
          <Input
            size="large"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="email"
            className="forget-email-input"
            placeholder="Type Email here..."
          />
          <div
            style={{
              marginBottom: "50px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "5px",
              color: "#1aa3ff"
            }}
          >
            Forgot email?
          </div>
          <div>
            Not your computer? Use Guest mode to sign in privately.
          </div>
          <div
            style={{
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "5px",
              color: "#1aa3ff"
            }}
          >
            Learn more
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px"
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                marginTop: "5px",
                color: "#1aa3ff",
                cursor: "pointer"
              }}
            >
              Create account
            </div>
            <div
              className="forget-next-button"
              onClick={() => this.sign()}
            >
              Next
            </div>
          </div>
        </div >
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps
)(Forgetpass);
