import React, {Component} from "react";
import TempPipeline from "../../templates/tempPipeline";
import Reminder from "../../cps/reminder/reminder";
import "./blog.scss";

class Blog extends Component {

	render() {
		return (
		<div className='pg pg-homepage-container'>
		<Reminder />
		<TempPipeline />
		</div>
		)
	}
}
export default Blog;
