import { IVehicle } from "../../models/IVehicle";

export interface IVehicleRepository {
  create(vehicle: IVehicle): IVehicle;
  findById(id: string): IVehicle | null;
  update(id: string, vehicle: IVehicle): IVehicle | null;
  delete(id: string): boolean;
}
