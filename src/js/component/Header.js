import React, { useState, useContext } from "react";
import { link, Link } from "react-router-dom";
import { Meeting, MeetUpList } from "../views/MeetUpList";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export function Header() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="jumbotron text-center">
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

			<h1>The Meetup Clone</h1>
			<p>This is a mini project created by Andres & Diana </p>
			{/* <Link className="btn btn-warning" to="/Event">
				Event
			</Link>
			<Link className="btn btn-warning" to="/Meeting">
				Meeting
			</Link> */}
		</div>
	);
}

export default Header;
