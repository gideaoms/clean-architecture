import { User } from "../../../models/model.js";
import { UserRepository } from "../../../repositories/repository.js";

export class UseCase {
  constructor(private readonly repositories: { user: UserRepository }) {}

  async exec() {
    const users = await this.repositories.user.findMany();
    return users.map(User.json);
  }
}
