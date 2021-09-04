import React, { Component } from 'react';
import Match from './Matchup';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./style.css";
class index extends Component {

    render() {
        return (
            <div className="matchup-index-root">
                <div style={{ minWidth: "97%", maxWidth: "97%" }}><Header /></div>
                <Match />
                <Footer />
            </div>
        );
    }
}

export default index;