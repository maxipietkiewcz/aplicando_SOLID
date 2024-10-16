// src/routes/vehicleRoutes.ts
import { Router, Request, Response } from "express";
import { VehicleController } from "../controllers/VehicleController";
import { VehicleService } from "../services/VehicleService";
import { MongoDBVehicleRepository } from "../repositories/MongoDBVehicleRepository";

// Inicializamos los componentes del vehículo
const vehicleRepository = new MongoDBVehicleRepository();
const vehicleService = new VehicleService(vehicleRepository);
const vehicleController = new VehicleController(vehicleService);

// Definimos las rutas para los vehículos
const router: Router = Router();

router.post("/", vehicleController.createVehicle.bind(vehicleController));
router.get("/:id", async (req: Request, res: Response) => {
  const vehicle = await vehicleController.getVehicle(req, res);
  res.json(vehicle);
});

export default router;
