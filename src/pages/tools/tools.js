import React, {Component} from "react";
import TempCoalesce from "../../templates/tempCoalesce";
import Reminder from "../../cps/reminder/reminder";
import "./tools.scss";

class Tools extends Component {

	render() {
		return (
		<div className='pg pg-homepage-container'>
		<Reminder />
		<TempCoalesce />
		</div>
		)
	}
}
export default Tools;
