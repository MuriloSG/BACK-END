import { getCustomRepository } from "typeorm";
import Service from "../typeprm/entities/Service";
import { serviceRepository } from "../typeprm/repositories/ServicesRepository";
import AppError from "@shared/errors/AppError";

interface IRequest{
  name: string;
  description: string;
  price: number;
  duration: number;
  status: string;
}

class CreateServicesService {
  public async execute({name, description, price, duration, status}: IRequest): Promise<Service>{
    const servicesReposity = getCustomRepository(serviceRepository);
    const serviceExists = await servicesReposity.findByName(name);

    if (serviceExists) {
      throw new AppError('There is already one service with this name')
    }

    const service = servicesReposity.create({
      name,
      description,
      price,
      duration,
      status
    });

    await servicesReposity.save(service);

    return service;
  }
}

export default CreateServicesService;
