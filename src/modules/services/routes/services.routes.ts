import { Router } from "express";
import ServicesController from "../controllers/ServicesController";
import {celebrate, Segments, Joi } from "celebrate";
const servicesRoutes = Router();
const servicesController = new ServicesController();

servicesRoutes.get("/", servicesController.index);

servicesRoutes.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  servicesController.show
);

servicesRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      duration: Joi.number().required(),
      status: Joi.string().required(),
    }
  }),
  servicesController.create
);

servicesRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      description: Joi.string(),
      price: Joi.number().precision(2),
      duration: Joi.number(),
      status: Joi.string(),
    }
  }),
  servicesController.update
);

servicesRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  servicesController.delete
);


export default servicesRoutes;
