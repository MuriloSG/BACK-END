import { getCustomRepository } from "typeorm";
import Service from "../typeprm/entities/Service";
import { serviceRepository } from "../typeprm/repositories/ServicesRepository";
import AppError from "@shared/errors/AppError";

interface IRequest{
  id: string;
}

class ShowServicesService {
  public async execute({id}: IRequest): Promise<Service | undefined> {
    const servicesReposity = getCustomRepository(serviceRepository);
    const service = await servicesReposity.findOne(id);

    if (!service) {
      throw new AppError('Service not found', 404);
    }
    
    return service;
  }
}

export default ShowServicesService;
