import { user } from "../../../models/model";
import { UserRepository } from "../../../repositories/repository";

export class Service {
  constructor(private readonly repositories: { user: UserRepository }) {}

  async exec() {
    const users = await this.repositories.user.findMany();
    return users.map(user.json);
  }
}
