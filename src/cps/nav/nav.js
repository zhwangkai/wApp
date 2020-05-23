import React, { Component } from "react";
import "./nav.scss";
import Menu from "../menu/menu";

class Nav extends Component {

    _toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }
    render() {
        return (
            <div className='cp cp-nav-container'>
            <a className='logo' href='/'>WiSM</a>
            <Menu />
            </div>
        )
    }
}
export default Nav;