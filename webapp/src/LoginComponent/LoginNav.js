import React, {Component} from "react";
import "./css/LoginComponent.css"
import { Link } from "react-router-dom";

export class LoginNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/login"}>store</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/signup"}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );

    }
}