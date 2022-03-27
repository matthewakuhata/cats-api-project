import { useEffect, useState } from "react";
import { CatBreed } from "./getCatBreeds";

export const usePaginatedCatBreeds = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [catBreeds, setCatBreeds] = useState<CatBreed[]>([]);
	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		setLoading(true);

		fetch(`/cats/paginated?page=${page}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				setLoading(false);
				setCatBreeds([...catBreeds, ...response]);
			});
	}, [page]);

	return { loading, catBreeds, page, setPage };
};

export default usePaginatedCatBreeds;
