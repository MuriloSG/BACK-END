import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  public async findByName(name: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        name,
      }
    });
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(Email: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        Email,
      },
    });

    return user;
  }
}
