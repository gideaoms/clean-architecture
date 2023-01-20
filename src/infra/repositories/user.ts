import * as repositories from "../../core/repositories/mod";
import * as models from "../../core/models/mod";
import * as mappers from "../mappers/mod";

export class Repository implements repositories.user.Repository {
  private readonly _users: mappers.user.Record[] = [];

  async create(user: models.user.Model) {
    const userWithId: models.user.Model = {
      ...user,
      id: (this._users.length + 1).toString(),
    };
    const record = mappers.user.fromModel(userWithId);
    this._users.push(record);
    return userWithId;
  }

  async findMany() {
    return this._users.map(mappers.user.toModel);
  }
}
