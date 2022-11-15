import React from "react";

const Search = () => {
	return (
		<section className="search">
			<input type="text" />
			<select name="continent" id="continent">
				<option value="-">-</option>
				<option value="Europe">Europe</option>
				<option value="Asie">Asie</option>
				<option value="Amerique">Amerique</option>
				<option value="Afrique">Afrique</option>
			</select>
		</section>
	);
};

export default Search;
