import { EntityRepository, Repository } from 'typeorm';
import Service from '../entities/Service'

@EntityRepository(Service)
export class serviceRepository extends Repository<Service> {
  public async findByName(name: string): Promise<Service | undefined> {
    const service = this.findOne({
      where: {
        name,
      },
    });

    return service;
  }
}
