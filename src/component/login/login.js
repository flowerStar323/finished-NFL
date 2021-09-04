import React, { Component } from 'react';
import { Row, Col, Input, Button, notification } from "antd";
import { Logsuccess, Logout } from "../../actions";
import { Link } from 'react-router-dom';
import "./style.css";
import axios from 'axios';

import { connect } from 'react-redux';
class login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    send = () => {
        const { email, password } = this.state;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            notification.warning({
                message: "Warning!",
                description: "Please enter in email format",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        } else if (password === "")
            notification.warning({
                message: "Warning!",
                description: "Please enter Your Password",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        else
            this.props.Logsuccess(email, password, this.props.history);
    }
    render() {
        return (
            <div style={{ display: "flex" }}>
                <Link to="/">
                    <div style={{ position: "absolute", zIndex: 1, top: "27px", left: "30px" }}>
                        <img className="login_logo-img" src="SYCUlogo.png" alt="Logo" height="30rem" />
                    </div>
                </Link>
                <div className="login-right-div-component">
                    <div className="login-RightDiv">
                        <div className="Right-Container">
                            <div className="Log-Top">Log In To Your Account</div>
                            <div className="Log-Input">
                                <div className="Log-Input-Container">
                                    <div className="email-content">
                                        E-Mail :
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <div className="email-icon">
                                            <i className="fa fa-envelope" style={{ color: "white" }} />
                                        </div>
                                        <div>
                                            <Input
                                                size="large"
                                                name="email"
                                                onChange={(e) => this.onChange(e)}
                                                onKeyPress={(e) => {
                                                    if (e.code === "Enter" || e.code === "NumpadEnter")
                                                        this.send();

                                                }}
                                                placeholder="E-mail here........"
                                                className="email-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="email-content">PASSWORD :</div>
                                    <div style={{ display: "flex" }}>
                                        <div className="email-icon">
                                            <i className="fa fa-lock" style={{ color: "white" }} />
                                        </div>
                                        <div>
                                            <Input
                                                size="large"
                                                type="password"
                                                name="password"
                                                onChange={(e) => this.onChange(e)}
                                                onKeyPress={(e) => {
                                                    if (e.code === "Enter" || e.code === "NumpadEnter")
                                                        this.send();

                                                }}
                                                placeholder="Type your password..."
                                                className="email-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Login-Button" onClick={() => this.send()}>
                                <div>LOG IN</div>
                            </div>
                            <div className="Log-Bottom">
                                <Link to="/forgetpass"><div style={{ color: "#C90D08", marginBottom: "5px" }}>Forgot Password?</div></Link>
                                <div style={{ display: "flex" }}>Don't have account? <Link to="/register"><p style={{ marginLeft: "10px", fontWeight: "bold", color: "#C90D08", cursor: "pointer" }}>Register</p></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {};
};
export default connect(mapStateToProps, { Logout, Logsuccess })(login);
