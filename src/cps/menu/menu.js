import React, { Component } from "react";
import "./menu.scss";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    _toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    render() {
        return (
            <div className='cp cp-menu-container'>
			{this.state.showMenu ? ( <div className='menu-box'>
				<a className='menu-link'>Tools</a>
			</div>) : (<div></div>)}
		</div>
        )
    }
}
export default Menu;