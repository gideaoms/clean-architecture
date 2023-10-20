import { UserModel } from "../../../models/model";
import { UserRepository } from "../../../repositories/repository";

export class UseCase {
  constructor(private readonly repositories: { user: UserRepository }) {}

  async exec() {
    const users = await this.repositories.user.findMany();
    return users.map(UserModel.json);
  }
}
