import express from "express";
import catController from "../../controllers/cats";

const catsRouter = express.Router();

catsRouter.get("/", catController.getCatBreeds);
catsRouter.get("/paginated", catController.getPaginatedCatBreeds);

export default catsRouter;
