import mongoose from "mongoose";

const carFeatureSchema = new mongoose.Schema({
    featureName: {
        type: String
    }
})

const CarFeatures = mongoose.model("CarFeatures", carFeatureSchema)

export default CarFeatures

