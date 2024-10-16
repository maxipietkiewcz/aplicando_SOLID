import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

export class ClientController {
  constructor(private clientService: ClientService) {}

  getAllClients(res: Response): void {
    const clients = this.clientService.getAllClients();
    res.json(clients);
  }

  getClientById(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const client = this.clientService.getClientById(id);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  }

  createClient(req: Request, res: Response): void {
    const client = req.body;
    this.clientService.createClient(client);
    res.status(201).json({ message: "Client created" });
  }

  updateClient(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const client = req.body;
    const success = this.clientService.updateClient(id, client);
    if (success) {
      res.json({ message: "Client updated" });
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  }

  deleteClient(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const success = this.clientService.deleteClient(id);
    if (success) {
      res.json({ message: "Client deleted" });
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  }
}
