import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import InfoCountry from "./components/InfoCountry";
import "./style.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:country" element={<InfoCountry />} />
				<Route path="*" element={<h1>Oups, tu t'es perdu ?</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
