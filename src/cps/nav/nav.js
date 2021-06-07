import React, { Component } from "react";
import "./nav.scss";
import Menu from "../menu/menu";
import {Link} from "react-router-dom";

class Nav extends Component {

    _toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }
    render() {
        return (
            <div className='cp cp-nav-container'>
                <Link to="/" className='logo'>
                    <div>WSM</div>
                </Link>
            <Menu />
            </div>
        )
    }
}
export default Nav;