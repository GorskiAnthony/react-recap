import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/Card.module.css";

const Card = ({ img, name, population, region, capital, link }) => {
	return (
		<div className={style.card}>
			<img src={img} width="auto" height="100px" />
			<div>
				<h2>
					<Link to={`/${link.toLowerCase()}`}>{name}</Link>
				</h2>
				<ul>
					<li>Population: {population}</li>
					<li>Region: {region}</li>
					<li>Capital: {capital}</li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
