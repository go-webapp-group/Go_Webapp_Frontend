import React, {Component}from 'react';
import Card from '../Components/Card';
import axios from "axios";
import { data } from '../Data';
import Navigation from '../Components/Navigation'

class Home extends Component {
    state = {
        data:[]
    };

    componentDidMount() {
        
        axios.get(`${process.env.REACT_APP_API_URL}/commodities`)
            .then(resp => {
                console.log(resp.data);
                this.setState({
                   data: resp.data
                });
            });
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className='container-fluid my-container'>
                    <div className='row '>
                        {data.map((elem) => {
                            return (
                                <div className='col-md-4 mt-3'>
                                    <Card
                                        itemId={elem.itemId}
                                        itemName={elem.itemName}
                                        itemPrice={elem.itemPrice}
                                        itemImage={elem.itemImage}
                                        itemDetails={elem.itemDetails}
                                    />
                                </div>
                            );
                        })}

                        {/* {this.data.map((elem) => {
                            return (
                                <div className='col-md-4 mt-3'>
                                    <Card
                                        itemId={elem.itemId}
                                        itemName={elem.itemName}
                                        itemPrice={elem.itemPrice}
                                        itemImage={elem.Picture}
                                        itemDetails={elem.itemDetails}
                                    />
                                </div>
                            );
                        })} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
