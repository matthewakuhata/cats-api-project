import express from "express";
import catRoutes from "./cats/cats.router";
import imageRoutes from "./images/images.router";

const api = express.Router();

api.use("/cats", catRoutes);
api.use("/images", imageRoutes);

export default api;
