import * as models from "../models/mod";

export function toObject(model: models.user.Model) {
  return {
    id: model.id,
    name: model.name,
    email: model.email,
    status: model.status,
  };
}
