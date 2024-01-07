import { getCustomRepository } from "typeorm";
import Service from "../typeprm/entities/Service";
import { serviceRepository } from "../typeprm/repositories/ServicesRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

class ShowServicesService {
  public async execute({ id, name, description, price, duration }: IRequest): Promise<Service> {
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

    await servicesReposity.save(service);

    return service;
  }
}

export default ShowServicesService;
