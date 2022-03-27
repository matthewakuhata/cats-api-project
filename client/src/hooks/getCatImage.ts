import { useEffect, useState } from "react";

export type CatImage = {
	id: string;
	url: string;
	height: number;
	width: number;
};

const useFetchCatImagesById = (limit?: number, id?: string) => {
	const [images, setImages] = useState<CatImage[]>([]);
	const [breedId, setBreedId] = useState<string>(id || "");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		if (!breedId) { return }

		const path = `/images?breed_id=${breedId}&limit=${limit}`;
		fetch(path, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				setImages(response);
				setLoading(false);
			});
	}, [breedId, limit]);

	return { images, loading, setBreedId };
};

export default useFetchCatImagesById;
