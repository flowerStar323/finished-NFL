import React, { Component } from 'react';
import Users from './Users';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./style.css";
class showuser extends Component {

  render() {
    return (
      <div className="admin-match-index-root">
        <div style={{ minWidth: "97%", maxWidth: "97%" }}><Header /></div>
        <Users />
        <Footer />
      </div>
    );
  }
}

export default showuser;