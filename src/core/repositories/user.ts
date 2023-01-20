import * as models from "../models/mod";

export type Repository = {
  create(user: models.user.Model): Promise<models.user.Model>;
  findMany(): Promise<models.user.Model[]>;
};
