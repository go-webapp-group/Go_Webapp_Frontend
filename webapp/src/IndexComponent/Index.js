import React, {Component} from "react";
import axios from "axios";
import "./css/IndexComponent.css"

export class Index extends Component {


    componentDidMount() {
        console.log(this.props.match.params.username);

        // axios.get(`${process.env.REACT_APP_API_URL}/api/technologies`)
        //     .then(resp => {
        //         console.log(resp.data);
        //     });
        
    }

    render() {
        return (
            <div>

            </div>
        );

    }
}