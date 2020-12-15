import React, {Component} from "react";
import axios from "axios";
import "./Login.css"

export class Login extends Component {
    state = {
        userInfo: [
            {
                "name": "Howell",
                "details": "Handsome Man"
            }, {
                "name": "Cindy",
                "details": "Beautiful girl"
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
        const logins = this.state.userInfo.map((userInfo, i) =>
            <li key={i}>
                <b>{userInfo.name}</b>: {userInfo.details}
            </li>
        );
        return (
            <ul className="technologies">
                {logins}
            </ul>
        );

    }
}