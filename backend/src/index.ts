import connectDB from "./database/database";

import Express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();

const cors = require("cors");

const app = Express();
connectDB();

app.use(Express.json());
// app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  next();
});

import userRouter from "./routes/user.route";
import carFeatureRouter from "./routes/carFeature.route";
import carRouter from "./routes/cars.route";
import notFound from "./middleware/notFound";

app.use("/user", userRouter)
app.use("/car-feature", carFeatureRouter)
app.use("/car", carRouter)

// app.use(notFound);

app.listen(process.env.PORT_NUMBER, () => {
  console.log("server running");
});
