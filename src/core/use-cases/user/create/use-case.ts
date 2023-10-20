import { user } from "../../../models/model";
import { UserRepository } from "../../../repositories/repository";

export class Service {
  constructor(private readonly repositories: { user: UserRepository }) {}

  async exec(name: string, email: string) {
    const user1 = user.build({
      name,
      email,
      status: "active",
    });
    const user2 = await this.repositories.user.create(user1);
    return user.json(user2);
  }
}
