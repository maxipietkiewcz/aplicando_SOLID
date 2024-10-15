// src/repositories/MongoDBVehicleRepository.ts
import { IVehicleRepository } from "./interfaces/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

export class MongoDBVehicleRepository implements IVehicleRepository {
  private vehicles: IVehicle[] = [];

  create(vehicle: IVehicle): IVehicle {
    this.vehicles.push(vehicle);
    return vehicle;
  }

  findById(id: string): IVehicle | null {
    return this.vehicles.find((vehicle) => vehicle.id === id) || null;
  }

  update(id: string, vehicle: IVehicle): IVehicle | null {
    const index = this.vehicles.findIndex((v) => v.id === id);
    if (index === -1) return null;
    this.vehicles[index] = vehicle;
    return vehicle;
  }

  delete(id: string): boolean {
    const initialLength = this.vehicles.length;
    this.vehicles = this.vehicles.filter((v) => v.id !== id);
    return this.vehicles.length < initialLength;
  }
}
