import CarFeatures from "../schemas/carFeatures.schema";
import { Request, Response } from "express";

const createCarFeature = async (req: Request, res: Response) => {
    const { featureName } = req.body
    try {
        const saveFeature = await CarFeatures.create(req.body)

        if (saveFeature) {
            res.status(200).send({ response: saveFeature })
        }
        else {
            res.status(400).send({ response: 'Failed to save feature' })
        }
    }
    catch (error) {
        res.status(500).send({ response: "Server Error, Failed to add car feature " })
    }
}

const getCarFeatures = async (req: Request, res: Response) => {
    try {
        const getfeatures = await CarFeatures.find()

        if (getfeatures) {
            res.status(200).send({ response: getfeatures })
        }
        else {
            res.status(400).send({ response: "Failed tp get car features" })
        }
    }
    catch (error) {
        res.status(500).send({ response: 'Server error, failed to get car features' })
    }
}



export default { createCarFeature, getCarFeatures }
