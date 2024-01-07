import servicesRoutes from "@modules/services/routes/services.routes";
import { Router } from "express"

const routes = Router();
routes.use("services", servicesRoutes);

export default routes;
