import { Router } from "express";
import ServicesController from "../controllers/ServicesController";
import { setDefaultAutoSelectFamily } from "net";

const servicesRoutes = Router();
const servicesController = new ServicesController();

servicesRoutes.get("/", servicesController.index);
servicesRoutes.get("/:id", servicesController.show);
servicesRoutes.post("/", servicesController.create);
servicesRoutes.put("/:id", servicesController.update);
servicesRoutes.delete("/:id", servicesController.delete);

export default servicesRoutes;
