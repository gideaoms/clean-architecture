import { user } from "../../models/model";

export type Repository = {
  create(user: user.Model): Promise<user.Model>;
  findMany(): Promise<user.Model[]>;
};
