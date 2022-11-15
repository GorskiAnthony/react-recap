import React, { useState } from "react";
import Header from "../components/Header";
import style from "../assets/darkMode.module.css";
const Layout = ({ children }) => {
	const [dark, setDark] = useState(false);

	const handleChange = () => {
		setDark(!dark);
	};

	return (
		<main className={dark ? style.darkMode : style.lightMode}>
			<Header handleChangeDarkMode={handleChange} />
			<div style={{ width: "70%", margin: "0 auto" }}>{children}</div>
		</main>
	);
};

export default Layout;
