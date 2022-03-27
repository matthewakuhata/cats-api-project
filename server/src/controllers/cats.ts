import { Request, Response, NextFunction } from "express";
import { AxiosResponse } from "axios";
import catsHttpService from "../services/cats.https";

const getCatBreeds = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const searchString = req.query?.search;
	console.log(req.query);
	const limit = req.query?.limit || 5;
	if (!searchString) {
		return res.status(200).json([]);
	}

	const path = `breeds/search?q=${searchString}`;

	try {
		const result = await catsHttpService.get(path, {});
		const data = formatBreedData(result.data);
		return res.status(200).json(data);
	} catch (err: any) {
		return res.status(404).json({ message: err.data?.message });
	}
};

const formatBreedData = (breeds: any) => {
	return breeds.map((dataPoint: any) => ({
		id: dataPoint.id,
		name: dataPoint.name,
		temperment: dataPoint.temperment,
		description: dataPoint.description,
		wikipediaUrl: dataPoint.wikipedia_url,
		statistics: {
			energyLevel: dataPoint.energy_level,
			childFriendly: dataPoint.child_friendly,
			affectionLevel: dataPoint.affection_level,
			adaptability: dataPoint.adaptability,
			dogFriendly: dataPoint.dog_friendly,
			grooming: dataPoint.grooming,
			healthIssues: dataPoint.health_issues,
			intelligence: dataPoint.intelligence,
			sheddingLevel: dataPoint.shedding_level,
			socialNeeds: dataPoint.social_needs,
			strangerFriendly: dataPoint.stranger_friendly,
			vocalisation: dataPoint.vocalisation,
		},
	}));
};

export default { getCatBreeds };
