import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
// import MeetForm from "./MeetForm";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";
export function MeetUpList() {
	const { store, actions } = useContext(Context);
	let test = "";
	console.log(actions.getMeetApp());

	// const AddMeeting = value => {
	// 	const newList = [...MeetApp, { mdate: value }];
	// 	SetMeeting(newList);
	// };

	if (store.MeetApp.length == 0) {
		test = "No Mettings";
	} else {
		test = (
			<div>
				{store.MeetApp.map((MeetApp, index) => (
					<Card
						key={index}
						// index={index}
						// mdate={MeetApp.mdate}
						// mhora={MeetApp.mhora}
						// meetingdet={MeetApp.meetingdet}
						MeetApp={MeetApp}
					/>
				))}
				{/* <h1>hello studen list </h1> */}
			</div>
		);
	}

	return (
		<div>
			<div>{/* <MeetForm addMeeting={AddMeeting} /> */}</div>
			{test}
		</div>
	);
}
