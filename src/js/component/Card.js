import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Card(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card bg-light mb-3">
			<div className="card-header">{props.MeetApp.mdate}</div>
			<div className="card-body row">
				<h5 className="card-title col-3">{props.MeetApp.mhora}</h5>

				<div className="card-text col-9">
					<Link
						to={{
							pathname: "/Event/" + props.MeetApp.id,
							MeetApp: props.MeetApp
						}}>
						{props.MeetApp.meetingdet}
					</Link>
					<br />
					<Link
						className="idtest"
						to={{
							pathname: "/Meeting/" + props.MeetApp.id,
							MeetApp: props.MeetApp
						}}>
						MeetUp:
						{props.MeetApp.id}
					</Link>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	// index: PropTypes.number,
	// mdate: PropTypes.func,
	// mhora: PropTypes.string,
	// mevent: PropTypes.string,
	// meetingdet: PropTypes.string,
	MeetApp: PropTypes.object
};
