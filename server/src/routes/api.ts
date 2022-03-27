import express from "express";
import catRoutes from "./cats/cats.router";
const api = express.Router();

api.use("/cats", catRoutes);
export default api;
