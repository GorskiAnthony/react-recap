import React from "react";
import Card from "./Card";
import style from "../assets/CardsList.module.css";

export default function CardsList({ allCountry }) {
	// () => () >> return implicite
	/* 
  () => { 
    return ()
  } >> return pas implicite
  */
	return (
		<div className={style.card}>
			{allCountry.map((country, id) => (
				<Card
					key={id}
					img={country.flags.svg}
					name={country.name}
					link={country.name}
					population={country.population}
					region={country.region}
					capital={country.capital}
				/>
			))}
		</div>
	);
}
