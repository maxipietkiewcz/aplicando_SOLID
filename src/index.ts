// src/index.ts
import express from "express";
import { VehicleController } from "./controllers/VehicleController";
import { VehicleService } from "./services/VehicleService";
import { MongoDBVehicleRepository } from "./repositories/MongoDBVehicleRepository";

const app = express();
app.use(express.json());

const vehicleController = new VehicleController(
  new VehicleService(new MongoDBVehicleRepository())
);

app.post("/vehicles", vehicleController.createVehicle.bind(vehicleController));
app.get("/vehicles/:id", (req, res) => {
  vehicleController.getVehicle(req, res);
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
