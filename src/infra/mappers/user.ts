import zod from "zod";
import * as models from "../../core/models/mod";

export type Record = {
  _id: string;
  _name: string;
  _email: string;
  _status: string;
};

export function toModel(data: unknown): models.user.Model {
  const record = zod
    .object({
      _id: zod.string(),
      _name: zod.string(),
      _email: zod.string().email(),
      _status: zod.enum(["active", "inactive"]),
    })
    .parse(data);
  return {
    id: record._id,
    name: record._email,
    email: record._email,
    status: record._status,
  };
}

export function fromModel(model: models.user.Model): Record {
  return {
    _id: model.id,
    _name: model.name,
    _email: model.email,
    _status: model.status,
  };
}
