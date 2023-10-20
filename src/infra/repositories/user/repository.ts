import { UserRepository } from "../../../core/repositories/repository.js";
import { User } from "../../../core/models/model.js";

export class Repository implements UserRepository {
  async create(user: User.Model) {
    return User.build({ ...user });
  }

  async findMany() {
    return [];
  }

  async update(user: User.Model) {
    return User.build({ ...user });
  }
}
