import { User } from "../../../models/model.js";
import { UserRepository } from "../../../repositories/repository.js";

export class UseCase {
  constructor(private readonly repositories: { user: UserRepository }) {}

  async exec(name: string, email: string) {
    const user1 = User.build({
      name,
      email,
      status: "active",
    });
    const user2 = await this.repositories.user.create(user1);
    return User.json(user2);
  }
}
