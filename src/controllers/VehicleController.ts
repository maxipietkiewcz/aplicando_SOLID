import { VehicleService } from "../services/VehicleService";
import { Request, Response } from "express";

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  createVehicle(req: Request, res: Response): void {
    const vehicle = this.vehicleService.addVehicle(req.body);
    res.status(201).json(vehicle);
  }

  getVehicle(req: Request, res: Response): Response {
    const vehicle = this.vehicleService.getVehicle(req.params.id);
    if (!vehicle) {
      return res.status(404).send("Vehículo no encontrado");
    }

    const vehicleData = {
      marca: vehicle.marca,
      modelo: vehicle.modelo,
      año: vehicle.año,
      precio: vehicle.precio,
      id: vehicle.id,
    };

    return res.json(vehicleData);
  }

  applyDiscount(req: Request, res: Response): Response {
    const vehicle = this.vehicleService.applyDiscount(
      req.params.id,
      req.body.discount
    );
    if (!vehicle) return res.status(404).send("Vehicle not found");
    return res.json(vehicle);
  }
}
