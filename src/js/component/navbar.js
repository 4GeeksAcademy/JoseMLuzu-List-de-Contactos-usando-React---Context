import React from "react";
import { Link, useParams } from "react-router-dom";

export const Navbar = () => {
	
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 px-2 ">Contacts</span>
			</Link>
			<div className="ml-auto">
				<Link to="/newContact">
				{window.location.pathname == "/newContact" ? "":<button className="btn btn-primary bg-success mx-3">Add new contact</button>}
				</Link>
			</div>
		</nav>
	);
};
