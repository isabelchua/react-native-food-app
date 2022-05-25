import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState({
		data: null,
		loading: false,
		error: null
	});

	const searchRestaurants = async term => {
		setResults({
			data: null,
			loading: true,
			error: null
		});

		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 15,
					term,
					location: "sf"
				}
			});
			setResults({
				data: response.data.businesses,
				loading: false,
				error: null
			});
		} catch (error) {
			setResults({
				data: null,
				loading: false,
				error: "Something went wrong"
			});
		}

		//	console.log(response);
	};
	return [results, searchRestaurants];
};
