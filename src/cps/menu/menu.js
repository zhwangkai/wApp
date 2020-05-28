import React, { Component } from "react";
import "./menu.scss";
import List from '../../assets/images/svg/list.svg';
import Crawler from '../../assets/images/svg/python.svg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        }
        this.timeOutId = null;

        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                toggled: false
            });
        });
    }

    onFocusHandler() {
        clearTimeout(this.timeOutId);
    }

    onClickCloseHandler() {
        this.setState({
            toggled: false
        })
    }

    render() {
        return (
            <div className='cp cp-menu-container' 
            onFocus={this.onFocusHandler} 
            onBlur={this.onBlurHandler}
            tabIndex="0">
                <img className="btn btn-menu icon" onClick={this.onClickHandler} src={List} />
            {this.state.toggled && ( <div className='menu-box'>
                <a className='menu-link tools' href='/#/tools' onClick={this.onClickCloseHandler.bind(this)}>Tools</a>
                <a className='menu-link blog' href='/#/blog' onClick={this.onClickCloseHandler.bind(this)}>Blog</a>
                <a className='menu-link reminder' onClick={this.onClickCloseHandler.bind(this)}>Reminder</a>
                <a className='menu-link python' onClick={this.onClickCloseHandler.bind(this)}>
                Crawler</a>
            </div>)
        } 
        </div>
        )
    }
}
export default Menu;