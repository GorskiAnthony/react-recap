import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../assets/Card.module.css";
import Layout from "../pages/Layout";

const InfoCountry = () => {
	const { country } = useParams();
	const [dataCountry, setDataCountry] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v2/name/${country}`)
			.then((res) => {
				setDataCountry(res.data);
				setIsLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	console.log(dataCountry);

	return isLoading ? (
		<h1>Je recherche les infos du pays</h1>
	) : (
		<Layout>
			<div className={style.card}>
				<img
					src={dataCountry[0].flags.svg}
					width="auto"
					height="100px"
				/>
				<div>
					<h2>{dataCountry[0].name}</h2>
					<ul>
						<li>Population: {dataCountry[0].population}</li>
						<li>Region: {dataCountry[0].region}</li>
						<li>Capital: {dataCountry[0].capital}</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default InfoCountry;
