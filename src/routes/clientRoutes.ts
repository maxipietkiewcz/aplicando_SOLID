// src/routes/clientRoutes.ts
import { Router, Request, Response } from "express";
import { ClientController } from "../controllers/ClientController";
import { ClientService } from "../services/ClientService";
import { InMemoryClientRepository } from "../repositories/InMemoryClientRepository";

// Inicializamos los componentes del cliente
const clientRepository = new InMemoryClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

// Definimos las rutas para los clientes
const router: Router = Router();

router.get("/", (req: Request, res: Response) =>
  clientController.getAllClients(res)
);
router.get("/:id", (req: Request, res: Response) =>
  clientController.getClientById(req, res)
);
router.post("/", (req: Request, res: Response) =>
  clientController.createClient(req, res)
);
router.put("/:id", (req: Request, res: Response) =>
  clientController.updateClient(req, res)
);
router.delete("/:id", (req: Request, res: Response) =>
  clientController.deleteClient(req, res)
);

export default router;
