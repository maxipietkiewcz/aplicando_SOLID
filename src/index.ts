// src/index.ts
import express from "express";
import clientRoutes from "./routes/clientRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";

class Server {
  private app: express.Application;
  private readonly PORT: number = 3000;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Configura los middlewares
  private middlewares(): void {
    this.app.use(express.json());
  }

  // Configura las rutas
  private routes(): void {
    this.app.use("/api/clients", clientRoutes);
    this.app.use("/api/vehicles", vehicleRoutes);
  }

  // Inicia el servidor
  public start(): void {
    this.app.listen(this.PORT, () =>
      console.log(`Server running on http://localhost:${this.PORT}`)
    );
  }
}

// Crear una instancia del servidor y arrancarlo
const server = new Server();
server.start();
