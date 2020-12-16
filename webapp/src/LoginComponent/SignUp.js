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
        ]
    };

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/technologies`)
            .then(resp => {
                console.log(resp.data);
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
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="email" className="form-control" placeholder="Confirm password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="#">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );

    }
}