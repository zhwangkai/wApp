import React, {Component} from "react";
import TempCoalesce from "../../templates/tempCoalesce";
import "./reminder.scss";

class Reminder extends Component {

	render() {
		return (
		<div className='cp cp-reminder-container'>
		<div className='log'>WiSM</div>
		<TempCoalesce />
		</div>
		)
	}
}
export default Reminder;
