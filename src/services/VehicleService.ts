// src/services/VehicleService.ts
import { IVehicleRepository } from "../repositories/interfaces/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  addVehicle(vehicle: IVehicle): IVehicle {
    return this.vehicleRepository.create(vehicle);
  }

  getVehicle(id: string): IVehicle | null {
    return this.vehicleRepository.findById(id);
  }

  applyDiscount(id: string, discount: number): IVehicle | null {
    const vehicle = this.vehicleRepository.findById(id);
    if (!vehicle) return null;
    vehicle.precio -= vehicle.precio * (discount / 100);
    return this.vehicleRepository.update(id, vehicle);
  }
}
