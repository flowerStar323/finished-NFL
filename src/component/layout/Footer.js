import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer-bottom">
                <span>Copyright © 2021 StuffYouCanUse</span>
                <div>
                    <button className="footer-buttom-btn">Terms &amp; Conditions</button>
                    <button className="footer-buttom-btn">License Agreement</button>
                    <button className="footer-buttom-btn">Privacy Policy</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {

    };
};
export default connect(
    mapStateToProps,
)(Footer);