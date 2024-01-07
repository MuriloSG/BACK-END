import { getCustomRepository } from "typeorm";
import Service from "../typeorm/entities/Service";
import { serviceRepository } from "../typeorm/repositories/ServicesRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  status: string;
}

class UpdateServicesService {
  public async execute({ id, name, description, price, duration, status }: IRequest): Promise<Service> {
    const servicesReposity = getCustomRepository(serviceRepository);
    const service = await servicesReposity.findOne(id);

    if (!service) {
      throw new AppError('Service not found');
    }

    const productExists = await servicesReposity.findByName(name);
    if (productExists && name !== service.name) {
      throw new AppError('There is already one service with this name')
    }

    service.name = name;
    service.price = price;
    service.duration = duration;
    service.description = description;
    service.status = status;

    await servicesReposity.save(service);

    return service;
  }
}

export default UpdateServicesService;
