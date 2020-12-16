import React, {Component} from "react";
import axios from "axios";
import "./css/LoginComponent.css"

import {LoginNav} from "./LoginNav";

const SignUpDiv = {
    marginTop: "90px"
};

export class SignUp extends Component {
    state = {
        userInfo: [
            {
                "username": "Howell",
                "password": "Howell123"
            }, {
                "username": "Cindy",
                "password": "Cindy123"
            }
        ],

        username: "",

        password: "",

        confirm: "",

        loginUrl: ""
    };

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/technologies`)
            .then(resp => {
                console.log(resp.data);
            });

        this.setState({
            loginUrl: `${process.env.REACT_LOGIN_URL}`
        });
    }

    clickSignUp(username, password, confirm) {
        console.log(username, password, confirm);

        let flag = 0;

        /*
        * 首先判断用户名是否被使用过
        * 如果 flag === userInfo.length，则用户名未被使用过
        * */
        for (let i = 0; i < this.state.userInfo.length; i++)
            if (this.state.userInfo[i].username === username)
                break;
            else
                flag++;

        /*
        * 当用户名未被使用过时，确认两次输入密码是否一致
        * */
        if (flag === this.state.userInfo.length) {
            if (password === confirm)
                this.props.history.push('/main');
            else
                console.log("Confirm Password is not the same as Password");
        } else
            console.log("Username Exists");

    }

    formUserName(e) {
        this.setState({
            username: e.target.value
        });
    }

    formPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    formConfirm(e) {
        this.setState({
            confirm: e.target.value
        });
    }

    render() {
        return (
            <div>
                <LoginNav/>
                <div className="auth-wrapper">
                    <div className="auth-inner" style={SignUpDiv}>
                        <form>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Username" onChange={(e) => this.formUserName(e)} value={this.state.username}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => this.formPassword(e)} value={this.state.password}/>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm password" onChange={(e) => this.formConfirm(e)} value={this.state.confirm}/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={(e) => {this.clickSignUp(this.state.username, this.state.password, this.state.confirm)}}>Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href={this.state.loginUrl}>login?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );

    }
}