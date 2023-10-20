import { UserRepository } from "../../../core/repositories/repository";
import { UserModel } from "../../../core/models/model";

export class Repository implements UserRepository {
  async create(user: UserModel.Model) {
    return UserModel.build({ ...user });
  }

  async findMany() {
    return [];
  }
}
