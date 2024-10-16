import { IClient } from "../../models/IClient";

export interface IClientRepository {
  create(client: IClient): IClient;
  findById(id: string): IClient | null;
  update(id: string, client: IClient): IClient | null;
  delete(id: string): boolean;
}
