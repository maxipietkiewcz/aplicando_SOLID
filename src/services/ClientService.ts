import { IClient } from "../models/IClient";
import { ClientRepository } from "../repositories/InMemoryClientRepository";

export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  getAllClients(): IClient[] {
    return this.clientRepository.getAll();
  }

  getClientById(id: number): IClient | undefined {
    return this.clientRepository.getById(id);
  }

  createClient(client: IClient): void {
    client.id = Date.now();

    this.clientRepository.create(client);
  }

  updateClient(id: number, client: IClient): boolean {
    return this.clientRepository.update(id, client);
  }

  deleteClient(id: number): boolean {
    return this.clientRepository.delete(id);
  }
}
