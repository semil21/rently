import CarController from "../controllers/cars.controller"
import express from "express"

const carRouter = express.Router()

carRouter.get("/", CarController.getAllCars)
carRouter.post("/user-car/:userId", CarController.getUserCars)
carRouter.post("/add", CarController.addNewCar)
carRouter.put("/update-car/:carId", CarController.updateUserCar)
carRouter.delete("/delete-car/:carId", CarController.deleteUSerCar)

export default carRouter