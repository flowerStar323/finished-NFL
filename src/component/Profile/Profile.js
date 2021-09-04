import { notification, Input } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editprofile } from "../../actions";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            oldpassword: "",
            newpass: "",
            conpass: "",
            countANDpay: []
        }
    }

    componentWillMount() {
        this.setState({
            name: this.props.userinfor.name,
            email: this.props.userinfor.email,
            oldpassword: this.props.userinfor.password,
            countANDpay: this.props.userinfor.countANDpay
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.userinfor.password);
        this.setState({
            name: nextProps.userinfor.name,
            email: nextProps.userinfor.email,
            oldpassword: nextProps.userinfor.password,
            countANDpay: nextProps.userinfor.countANDpay,
            newpass: "",
            conpass: "",
            password: ""
        });
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    save = () => {
        const { name, email, password, newpass, conpass, oldpassword } = this.state;
        if (newpass === "")
            notification.warning({
                message: "Warning!",
                description: "New Password is empty",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        else if (conpass === "")
            notification.warning({
                message: "Warning!",
                description: "Confirm Password is empty",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        else if (oldpassword !== password) {
            console.log(oldpassword, password);
            notification.warning({
                message: "Warning!",
                description: "old password is wrong!",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        }
        else if (newpass !== conpass) {
            notification.warning({
                message: "Warning!",
                description: "confirm password must same with new password",
                duration: 2,
                style: { background: "#ffffcc" }
            })
        } else {
            this.props.editprofile(name, email, newpass);
        }
    }
    render() {

        return (

            <div className="profile-index-root">
                <div className="profile-header-text">
                    Personal Information
                </div>
                <div className="profile_Right-Container">
                    <div className="profile_Log-Input">
                        <div className="profile_Log-Input-Container">
                            <div className="profile_email-content">
                                NAME :
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="profile_email-icon">
                                    <i className="fa fa-user" style={{ color: "white" }} />
                                </div>
                                <Input size="large" name="name" value={this.state.name} onChange={(e) => this.onChange(e)} placeholder="Name here........" className="profile_email-input" />
                            </div>
                        </div>
                        <div className="profile_Log-Input-Container">
                            <div className="profile_email-content">
                                E-Mail :
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="profile_email-icon">
                                    <i className="fa fa-envelope" style={{ color: "white" }} />
                                </div>
                                <Input size="large" readOnly name="email" value={this.state.email} onChange={(e) => this.onChange(e)} placeholder="E-mail here........" className="profile_email-input" />
                            </div>
                        </div>
                        <div className="profile_Log-Input-Container">
                            <div className="profile_email-content">
                                OLD PASSWORD :
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="profile_email-icon">
                                    <i className="fa fa-lock" style={{ color: "white" }} />
                                </div>
                                <Input size="large" type="password" name="password" value={this.state.password} onChange={(e) => this.onChange(e)} placeholder="Old Password here........" className="profile_email-input" />
                            </div>
                        </div>
                        <div className="profile_Log-Input-Container">
                            <div className="profile_email-content">
                                NEW PASSWORD :
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="profile_email-icon">
                                    <i className="fa fa-lock" style={{ color: "white" }} />
                                </div>
                                <Input size="large" type="password" name="newpass" value={this.state.newpass} onChange={(e) => this.onChange(e)} placeholder="New Password here........" className="profile_email-input" />
                            </div>
                        </div>
                        <div>
                            <div className="profile_email-content">CONFIRM PASSWORD :</div>
                            <div style={{ display: "flex" }}>
                                <div className="profile_email-icon">
                                    <i className="fa fa-lock" style={{ color: "white" }} />
                                </div>
                                <Input size="large" type="password" name="conpass" onChange={(e) => this.onChange(e)} value={this.state.conpass} placeholder="Re-Type your password..." className="profile_email-input" />
                            </div>
                        </div>

                    </div>
                    <div className="profile_Login-Button" onClick={() => this.save()}>
                        <div>SAVE</div>
                    </div>
                </div>
            </div >

        );
    }
}
const mapStateToProps = state => {
    return {
        userinfor: state.auth.user
    };
};
export default connect(
    mapStateToProps, { editprofile }
)(Profile);