import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Event } from "./views/Event";
import { Meeting } from "./views/Meeting";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { Header } from "./component/Header";
import { MeetUpList } from "./views/MeetUpList";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}

				<Switch>
					<Route exact path="/">
						<Header />
						<MeetUpList />
					</Route>
					<Route exact path="/Event/:id">
						<Event />
					</Route>
					<Route exact path="/Meeting/:id">
						<Meeting />
					</Route>
				</Switch>
				<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
