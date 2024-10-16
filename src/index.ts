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

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api/clients", clientRoutes);
    this.app.use("/api/vehicles", vehicleRoutes);
  }

  public start(): void {
    this.app.listen(this.PORT, () =>
      console.log(`Server running on http://localhost:${this.PORT}`)
    );
  }
}

const server = new Server();
server.start();
