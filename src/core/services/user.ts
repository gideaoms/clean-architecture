import * as repositories from "../repositories/mod";
import * as models from "../models/mod";
import * as mappers from "../mappers/mod";

export class Service {
  constructor(private readonly _userRepository: repositories.user.Repository) {}

  async create(name: string, email: string) {
    const userToCreate: models.user.Model = {
      id: "",
      name: name,
      email: email,
      status: "active",
    };
    const createdUser = await this._userRepository.create(userToCreate);
    return mappers.user.toObject(createdUser);
  }

  async findMany() {
    const users = await this._userRepository.findMany();
    return users.map(mappers.user.toObject);
  }
}
