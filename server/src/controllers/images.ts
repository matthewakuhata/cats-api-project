import { Request, Response, NextFunction } from "express";
import { AxiosResponse } from "axios";
import catsHttpService from "../services/cats.https";

const getAllImages = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const limit = req.query.limit || 1;
	const breed_id = req.query.breed_id;
	try {
		const result: AxiosResponse = await catsHttpService.get(
			`images/search?limit=${limit}&breed_id=${breed_id}`,
			{}
		);
		const data = result.data || [];
		return res.status(200).json(data);
	} catch (err: any) {
		return res.status(404).json({ message: err.data?.message });
	}
};

const getImageById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params?.id;
	const result: AxiosResponse = await catsHttpService.get(`images/${id}`, {});

	const data = result.data || [];
	return res.status(200).json(data);
};

export default {
	getAllImages,
	getImageById,
};
