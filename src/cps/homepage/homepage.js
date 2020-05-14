import React, {Component} from "react";
import TempSwirl from "../../templates/tempSwirl";
import "./homepage.scss";

class Homepage extends Component {

	render() {
		return (
		<div className='cp cp-homepage-container'>
		<div className='log'>WiSM</div>
		<TempSwirl />
		</div>
		)
	}
}
export default Homepage;
