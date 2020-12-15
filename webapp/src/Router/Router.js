import React, {Component} from "react";
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import {Login} from "../login/Login.js"
import {Tech} from "../tech/Tech.js"

const Home = () => <div>首页</div>
const Kind = () => <div>分类</div>
const Cart = () => <div>购物车</div>
const User = () => <div>我的</div>

export class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/"> <Login/> </Route>
                <Route path="/tech"> <Tech/> </Route>

                <ul>
                    <li><NavLink activeClassName="selected" to="/home">首页</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/kind">分类</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/cart">购物车</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/user">我的</NavLink></li>
                </ul>
                <hr />
                //渲染组件的方式
                <Route path="/home" component = { Home } />
                <Route path="/kind" ><Tech/></Route>
                <Route path="/cart" render = { () => <Cart/> }></Route>
                <Route path="/user" component = { User } />
            </Router>
        );
    }
}