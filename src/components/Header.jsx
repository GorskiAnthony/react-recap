import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleChangeDarkMode }) => {
	// console.log(props);
	// const { handleChangeDarkMode } = props;
	// {props.handleChangeDarkMode}

	return (
		<header>
			<div>Where in the world?</div>
			<Link to="/">Accueil</Link>
			<button onClick={handleChangeDarkMode}>Dark mode</button>
		</header>
	);
};

export default Header;
