import React, {Component} from "react";
import axios from "axios";
import "./css/LoginComponent.css"

import {LoginNav} from "./LoginNav";

const LoginDiv = {
    marginTop: "90px"
};

export class Login extends Component {
    state = {
        userInfo: [
            {
                "username": "Howell",
                "password": "Howell123"
            }, {
                "username": "Cindy",
                "password": "Cindy123"
            }
        ]
    };

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/technologies`)
            .then(resp => {
                console.log(resp.data);
            });
    }

    render() {
        // const logins = this.state.userInfo.map((userInfo, i) =>
        //     <li key={i}>
        //         <b>{userInfo.username}</b>: {userInfo.password}
        //     </li>
        // );
        return (
            <div>
                <LoginNav/>
                <div className="auth-wrapper">
                    <div className="auth-inner" style={LoginDiv}>
                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" placeholder="Enter username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>

            </div>

        );

    }
}