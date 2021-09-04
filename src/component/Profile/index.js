import React, { Component } from 'react';
import Profile from './Profile';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./style.css";
class showuser extends Component {

    render() {
        return (
            <div className="profile-index-root">
                <Header />
                <Profile />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default showuser;