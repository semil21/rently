import Cars from "../schemas/car.schema"
import expressAsyncHandler from "express-async-handler";

const addNewCar = expressAsyncHandler(async (req, res) => {
    const data = req.body
    try {
        const saveDara = await Cars.create(data)

        if (saveDara) {
            res.status(200).send({ response: saveDara })
        }
        else {
            res.status(400).send({ response: 'Failed to add new car' })
        }
    }
    catch (error) {
        res.status(500).send("Server error, failed to add new car")
    }
})

const getAllCars = expressAsyncHandler(async (req, res) => {
    try {
        const getCarsData = await Cars.find().populate("features").lean()

        if (getCarsData) {
            res.status(200).send({ response: getCarsData })
        }
        else {
            res.status(400).send({ response: 'Failed to get cars data' })
        }
    }
    catch (error) {
        res.status(500).send("Server error, failed to car data")
    }
})

const getUserCars = expressAsyncHandler(async (req, res) => {
    const { userId } = req.params
    try {
        const getCarsData = await Cars.find({ userId: userId }).populate("features").lean()

        if (getCarsData) {
            res.status(200).send({ response: getCarsData })
        }
        else {
            res.status(500).send({ response: 'Failed to get cars data' })
        }
    }
    catch (error) {
        res.status(500).send({ response: 'Server Error,Failed to get ' })
    }
})

const updateUserCar = expressAsyncHandler(async (req, res) => {
    const { carId } = req.params
    const data = req.body
    try {
        const updateRecord = await Cars.findOneAndUpdate(
            { _id: carId },
            data,
            { new: true }
        )

        if (updateRecord) {
            res.status(200).send({ response: updateRecord })
        }
        else {
            res.status(400).send({ response: "Server error, failed to update car" })
        }
    }
    catch (error) {
        res.status(500).send({ response: "Server error, failed to update car" })
    }
})

const deleteUSerCar = expressAsyncHandler(async (req, res) => {
    const { carId } = req.params
    try {
        const deleteRecord = await Cars.findOneAndDelete({ _id: carId })
        if (deleteRecord) {
            res.status(200).send({ response: deleteRecord })
        }
        else {
            res.status(400).send({ response: "Failed to delete car" })
        }
    }
    catch (error) {
        res.status(500).send({ response: "Server error, failed to delete car" })
    }
})

export default { addNewCar, getAllCars, getUserCars, updateUserCar, deleteUSerCar }