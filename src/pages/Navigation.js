import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Landing";

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route path="*" element={() => "404 NOT FOUND"} />
				</Routes>
			</Router>
		);
	}
}

export default Navigation;
