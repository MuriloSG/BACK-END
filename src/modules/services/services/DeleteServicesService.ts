import { getCustomRepository } from "typeorm";
import { serviceRepository } from "../typeprm/repositories/ServicesRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

class DeleteServicesService {
  public async execute({ id }: IRequest): Promise<void> {
    const servicesReposity = getCustomRepository(serviceRepository);
    const service = await servicesReposity.findOne(id);

    if (!service) {
      throw new AppError('Service not found', 404);
    }

    await servicesReposity.remove(service);
  }
}

export default DeleteServicesService;
