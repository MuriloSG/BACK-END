import { getCustomRepository } from "typeorm";
import Service from "../typeprm/entities/Service";
import { serviceRepository } from "../typeprm/repositories/ServicesRepository";
import AppError from "@shared/errors/AppError";

class ListServicesService {
  public async execute(): Promise<Service[]> {
    const servicesReposity = getCustomRepository(serviceRepository);
    const service = await servicesReposity.find();

    if (service.length === 0) {
      throw new AppError('There are no services', 404)
    }

    return service;
  }
}

export default ListServicesService;
