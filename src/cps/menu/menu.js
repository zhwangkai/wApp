import React, { Component } from "react";
import "./menu.scss";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    handleBlur() {
    	window.alert("xixi");
    	this.setState({
    		toggled: false
    	});
    	window.alert("hah");
    }

    handleClose() {
    	this.setState({
    		toggled:false
    	})
    }

    render() {
        return (
            <div className='cp cp-menu-container'>
			<svg t="1589467129714" onClick={this.handleToggle} className="btn btn-menu icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4379" width="35" height="35"><path d="M128 256h64V192H128zM320 256h576V192H320zM128 544h64v-64H128zM320 544h576v-64H320zM128 832h64v-64H128zM320 832h576v-64H320z" fill="#ffffff" p-id="4380"></path></svg>
			{this.state.toggled ? ( <div className='menu-box' onBlur={this.handleBlur}>
				<a className='menu-link' href='/#/tools' onClick={this.handleClose}>Tools</a>
				<a className='menu-link' href='/#/blog' onClick={this.handleClose}>Blogs</a>
				<a className='menu-link' onClick={this.handleClose}>Blogs</a>
				<a className='menu-link' onClick={this.handleClose}>Blogs</a>
			</div>) : (<div></div>)}
		</div>
        )
    }
}
export default Menu;