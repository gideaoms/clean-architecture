import { UserModel } from "../../../models/model";
import { UserRepository } from "../../../repositories/repository";

export class UseCase {
  constructor(private readonly repositories: { user: UserRepository }) {}

  async exec(name: string, email: string) {
    const user1 = UserModel.build({
      name,
      email,
      status: "active",
    });
    const user2 = await this.repositories.user.create(user1);
    return UserModel.json(user2);
  }
}
