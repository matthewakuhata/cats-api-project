import express from "express";
import imageController from "../../controllers/images";

export const imageRouter = express.Router();

imageRouter.get("/", imageController.getAllImages);
imageRouter.get("/:id", imageController.getImageById);

imageRouter.get("/favourites/list", imageController.getFavoriteImages);
imageRouter.post("/favourites/:id", imageController.saveImageAsFavourite);
imageRouter.delete("/favourites/:id", imageController.deleteFavourite);

export default imageRouter;
