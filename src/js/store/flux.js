const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			MeetApp: [
				{
					id: 1,
					mdate: "Oct 23",
					mhora: "7:00 pm",
					meetingdet: "5th event",
					meetimg: "",
					meetdet:
						"However, none of these agenda items are helpful without more detail, and that is where seeing some meeting agenda examples that cover a variety of topics is going to be very useful. Below are five sample meeting agendas that have been filled in to give you a better sense of how the meeting agenda should actually look."
				},
				{
					id: 2,
					mdate: "Oct 24",
					mhora: "6:00 pm",
					meetingdet: "4th event",
					meetimg: "",
					meetdet:
						"Before we dive into the sample agenda templates, the biggest common mistake people make when putting together meeting agendas is not explaining why the meeting exists in the first place. Every meeting should have a clear goal so that everyone who shows up knows why they showed up. (Turns out, people really appreciate knowing why they were invited to a meeting!)"
				},
				{
					id: 3,
					mdate: "Oct 25",
					mhora: "10:00 am",
					meetingdet: "3rd event",
					meetimg: "",
					meetdet:
						"For more formal meetings that follow the traditional structure, make sure to use a more formal template. This applies to both a formal business meeting agenda, but it can also serve as a good example of a committee meeting agenda template, or even a board meeting. (By the way, this structure is usually based on a framework called"
				},
				{
					id: 4,
					mdate: "Oct 31",
					mhora: "2:00 pm",
					meetingdet: "6th event",
					meetimg: "",
					meetdet:
						"Before we dive into the sample agenda templates, the biggest common mistake people make when putting together meeting agendas is not explaining why the meeting exists in the first place. Every meeting should have a clear goal so that everyone who shows up knows why they showed up. (Turns out, people really appreciate knowing why they were invited to a meeting!)"
				}
			]
		},
		actions: {
			getMeetApp: () => {
				return getStore().MeetApp;
			},
			getMeetApps: id => {
				// this function was returning not found because of the double return. You need to create a temp variable and
				// assign a value to it and then return that.
				const MeetApp = getStore().MeetApp;
				id = parseInt(id);
				let temp = "not found"; // create temp variable
				MeetApp.forEach(element => {
					if (id == element.id) {
						temp = element; //assign the value here if found
					}
				});
				// only return once, temp will be one of two values based on the loop condition, either not found or the found element.
				return temp;
			}
		}
	};
};

export default getState;
