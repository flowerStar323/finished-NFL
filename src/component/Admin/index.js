import React, { Component } from 'react';
import Match from './Match';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
class index extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="admin-match-index-root">
        <div style={{ minWidth: "96%", maxWidth: "96%" }}><Header /></div>
        <Match />
        <Footer />
      </div>
    );
  }
}

export default index;