import { useEffect, useState } from "react";

export type CatBreed = {
	id: string;
	name: string;
	statistics: CatStatistic;
	temperment: string;
	description: string;
	wikipediaUrl: string;
};

export type CatStatistic = {
	[energyLevel: string]: number;
	childFriendly: number;
	affectionLevel: number;
	adaptability: number;
	dogFriendly: number;
	grooming: number;
	healthIssues: number;
	intelligence: number;
	sheddingLevel: number;
	socialNeeds: number;
	strangerFriendly: number;
	vocalisation: number;
};

const useFetchCatBreeds = (limit?: number) => {
	const [catBreeds, setCatBreeds] = useState<CatBreed[]>([]);
	const [searchString, setSearchString] = useState<string>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			if (!searchString) {
				setCatBreeds([]);
				setLoading(false);
				return;
			}

			setLoading(true);
			const response = await fetch(`/cats?search=${searchString}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data: CatBreed[] = await response.json();
			const limitedData = limit ? data.splice(0, limit) : data;

			setCatBreeds(limitedData);
			setLoading(false);
		};

		const timeout = setTimeout(() => {
			fetchData();
		}, 400);

		return () => clearTimeout(timeout);
	}, [searchString, limit]);

	return { catBreeds, loading, setSearchString };
};

export default useFetchCatBreeds;
