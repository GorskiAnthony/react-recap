import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsList from "../components/CardsList";
import Layout from "./Layout";
import Search from "../components/Search";

export default function App() {
	const [country, setCountry] = useState([]);

	const API = "https://restcountries.com/v3.1/region/europe";
	const API_ALL = "https://restcountries.com/v2/all";
	// [] => au montage du composant | componentDidMount
	// empty => charge tout le temps
	// [value] => à chaque fois que value sera modifier | componentDidUpdate
	useEffect(() => {
		axios
			.get(API_ALL)
			.then((res) => setCountry(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Layout>
			<Search />
			<CardsList allCountry={country} />
		</Layout>
	);
}
