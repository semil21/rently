import CarFeaturesController from "../controllers/carFeatures.controller";
import express from 'express'

const carFeatureRouter = express.Router()

carFeatureRouter.get("/", CarFeaturesController.getCarFeatures)
carFeatureRouter.post("/create", CarFeaturesController.createCarFeature)

export default carFeatureRouter