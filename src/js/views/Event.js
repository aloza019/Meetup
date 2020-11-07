import React, { useState, useContext } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Meeting } from "../views/Meeting";
import { Context } from "../store/appContext";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export function Event(props) {
	const { store, actions } = useContext(Context);
	let params = useParams();
	// let MeetApp = useLocation().MeetApp; //this is undefined
	// you have the ID that you want so use the function that you created to find that event
	// this returns not found because the code that you have in the flux, we need to adjust it a bit.
	let MeetApp = actions.getMeetApps(params.id);
	// with the change in the flux function, now it works, you now have in meetapp the object returned. We still have the error in the params.
	// the link now works, but you probably need to do the same on the Meeting.js file to change from using useLocation, to using your created flux action
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	let history = useHistory();
	console.log(params, params.id);
	console.log(MeetApp); // so this prints undefined -- fixed

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

				<h1>
					{/* DATE */}
					{MeetApp.mdate}
				</h1>
				<br />
				<h1>
					{/* 5th Event for meeting 1  */}
					{MeetApp.meetingdet}
					{" for meeting "}
					{params.id}
				</h1>
				{/* link do not work */}
				<Link to={"/Meeting/" + params.id}>
					MeetUp: {params.id}
					{/* {props.MeetApp.id}  this was wrong since props doesn't exist*/}
				</Link>
				<button className="btn btn-warning" onClick={() => history.goBack()}>
					Go Back{" "}
				</button>
			</div>
			<div className="card-event row">
				<div className="img col-8">
					<img
						src="https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<p className="card-text">{MeetApp.meetdet}</p>
					</div>
				</div>
				<div className="card-m col-4">
					<div className="card-header">
						<i className="far fa-clock" /> {MeetApp.mdate}
					</div>
					<div className="card-body">
						<h5 className="card-title">{MeetApp.mhora}</h5>
						<h5 className="card-text">Every first and last Tuesday of the month</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
Event.propTypes = {
	index: PropTypes.number,
	meetingdet: PropTypes.string,
	MeetApp: PropTypes.object
};

export default Event;
