// src/repositories/InMemoryClientRepository.ts
import { IClient } from "../models/IClient";

export interface ClientRepository {
  getAll(): IClient[];
  getById(id: number): IClient | undefined;
  create(client: IClient): void;
  update(id: number, client: IClient): boolean;
  delete(id: number): boolean;
}

export class InMemoryClientRepository implements ClientRepository {
  private clients: IClient[] = [];
  private nextId: number = 1;

  getAll(): IClient[] {
    return this.clients;
  }

  getById(id: number): IClient | undefined {
    return this.clients.find((client) => client.id === id);
  }

  create(client: IClient): void {
    this.clients = [...this.clients, client];
  }

  update(id: number, updatedClient: IClient): boolean {
    const index = this.clients.findIndex((client) => client.id === id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
      return true;
    }
    return false;
  }

  delete(id: number): boolean {
    const index = this.clients.findIndex((client) => client.id === id);
    if (index !== -1) {
      this.clients.splice(index, 1);
      return true;
    }
    return false;
  }

  getNextId(): number {
    return this.nextId++;
  }
}
