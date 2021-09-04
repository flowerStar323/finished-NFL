import React, { Component } from 'react';
import { Row, Col, Input, Button, notification } from "antd";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";
import { ServerURL } from 'src/config/port';
class register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            password: "",
            repassword: ""
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    register = () => {
        const { email, name, password, repassword } = this.state;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name == "")
            notification.warning({
                message: "Warning!",
                description: "Please enter Name",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        else if (!re.test(this.state.email))
            notification.warning({
                message: "Warning!",
                description: "Please enter in email format",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        else if (password !== repassword) {
            notification.warning({
                message: "Warning!",
                description: "repassword is incorrect.",
                duration: 2,
                style: { background: "#ffffcc" }
            });
        }
        else {
            axios.post(`${ServerURL}/register`, { email, name, password }).then(e => {
                if (e) {
                    notification.success({
                        message: "Success",
                        description: "Register Successful",
                        duration: 2,
                        style: { background: "#ccffdd" }
                    }); this.props.history.push("/login");
                }
            }).catch(err =>
                notification.warning({
                    message: "Warning!", description: err.response.data,
                    duration: 2,
                    style: { background: "#ffffcc" }
                }))
        }

    }
    render() {
        return (
            <div style={{ display: "flex" }}>
                <Link to="/">
                    <div className="re_LeftDiv">
                        <img className="re_markname" src="SYCUlogo.png" alt="Logo" height="30rem" />
                    </div>
                </Link>
                <div className="re_RightDiv">
                    <div className="re_Right-Container">
                        <div className="re_Log-Top">Create Your Account</div>
                        <div className="re_Log-Input">
                            <div className="re_Log-Input-Container">
                                <div className="re_email-content">
                                    NAME :
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className="re_email-icon">
                                        <i className="fa fa-user" style={{ color: "white" }} />
                                    </div>
                                    <div>
                                        <Input size="large" name="name" value={this.state.name} onChange={(e) => this.onChange(e)} placeholder="Name here........" className="re_email-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="re_Log-Input-Container">
                                <div className="re_email-content">
                                    E-Mail :
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className="re_email-icon">
                                        <i className="fa fa-envelope" style={{ color: "white" }} />
                                    </div>
                                    <div>
                                        <Input size="large" name="email" value={this.state.email} onChange={(e) => this.onChange(e)} placeholder="E-mail here........" className="re_email-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="re_Log-Input-Container">
                                <div className="re_email-content">
                                    PASSWORD :
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className="re_email-icon">
                                        <i className="fa fa-lock" style={{ color: "white" }} />
                                    </div>
                                    <div>
                                        <Input
                                            size="large"
                                            type='password'
                                            name="password"
                                            value={this.state.password}
                                            onChange={(e) => this.onChange(e)}
                                            placeholder="Name here........" className="re_email-input" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="re_email-content">CONFIRM PASSWORD :</div>
                                <div style={{ display: "flex" }}>
                                    <div className="re_email-icon">
                                        <i className="fa fa-lock" style={{ color: "white" }} />
                                    </div>
                                    <div>
                                        <Input size="large" type="password" name="repassword" onChange={(e) => this.onChange(e)} value={this.state.repassword} placeholder="Type your password..." className="re_email-input" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            className="re_Login-Button"
                            onClick={() => this.register()}
                        >
                            <div>REGISTER</div>
                        </div>
                        <div className="re_Log-Bottom">
                            <div style={{ display: "flex" }}>Have already an account? <Link to="/login"><p style={{ marginLeft: "10px", fontWeight: "bold", color: "#C90D08", cursor: "pointer" }}>Login here</p></Link></div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default register;