import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    name: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    vehicleType: {
        type: String,
        enum: ["car", "van", "mini bus", "prestige"],
        require: true
    },
    carBody: {
        type: String,
        enum: ["convertible", "coupe", "exotic car", "hatchback", "mini van", "truck", "sedan", "sports car", "SUV"],
        require: true
    },
    seats: {
        type: String,
        require: true
    },
    carEngine: {
        type: String,
        enum: ["1000-2000", "2000-4000", "4000-6000", "6000+"],
        require: true
    },
    dailyFare: {
        type: String,
        require: true
    },
    doors: {
        type: Number,
        require: true
    },
    luggageSpace: {
        type: Boolean
    },
    fuel: {
        type: String,
        enum: ['petrol', 'diesel', 'petrol + cng', 'electric', 'hybrid']
    },
    color: {
        type: String
    },
    average: {
        type: String
    },
    features: [
        { type: mongoose.Schema.Types.ObjectId, ref: "CarFeatures", default: null }
    ]
})

const Cars = mongoose.model("Cars", carSchema)

export default Cars