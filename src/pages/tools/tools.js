import React, {Component} from "react";
import Shift from "../../templates/tempShift";
import Reminder from "../../cps/reminder/reminder";
import "./tools.scss";

class Tools extends Component {

	render() {
		return (
		<div className='pg pg-homepage-container'>
		<Reminder />
		<Shift />
		</div>
		)
	}
}
export default Tools;
