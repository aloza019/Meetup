import React, { useState, useContext } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Event } from "./Event";
import { MeetUpList } from "./MeetUpList";
import { Context } from "../store/appContext";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export function Meeting(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	let params = useParams();
	// let MeetApp = useLocation().MeetApp; // you will probably need to change this to be like the one in Event.js
	let MeetApp = actions.getMeetApps(params.id);
	let history = useHistory();

	let MeetApps = actions.getMeetApps(params.id);
	// console.log(MeetApp);
	return (
		<div>
			<div className="jumbotron text-left bg-dark text-white">
				<Button variant="primary" onClick={handleShow}>
					Login
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Login</Modal.Title>
					</Modal.Header>
					<InputGroup className="userlog mb-3">
						<FormControl placeholder="username" />
					</InputGroup>
					<InputGroup className="userlog mb-3">
						<FormControl placeholder="password" />
					</InputGroup>
					{/* <Modal.Body>Woohoo</Modal.Body> */}
					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							Login
						</Button>
					</Modal.Footer>
				</Modal>
				<div className="meetingbox">
					<div className="card-body">
						<h5 className="boxtitle">People Going</h5>
						<a href="#" className="btn btn-primary">
							Login to RSVP
						</a>

						<p className="card-icons">
							<i className="fab fa-facebook-square" /> <i className="fab fa-twitter-square" />
						</p>
					</div>
				</div>
				<div className="row">
					<div className="imgmeeting col-6">
						<img
							src="https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							className="card-img-top"
							alt="..."
						/>
					</div>

					{/* date */}
					{/* 5th Event for meeting 1 */}
					{/* Meeting 1 */}
					<div className="col-3">
						<h3>
							{"Meeting "}
							{params.id}
						</h3>
						<h3 id="location"> Location</h3>
						<h3>Miami</h3>
					</div>

					{/* <Link
					//to={`/Event/${params.id}`}
					to={"Event/${params.id}"}>
					Event
				</Link> */}
				</div>
			</div>
			<MeetUpList />
		</div>
	);
}
export default Meeting;

Meeting.propTypes = {
	addMeeting: PropTypes.func,
	MeetApp: PropTypes.object,
	mhora: PropTypes.string
};
