import { User } from "../../models/model.js";

export type Repository = {
  create(user: User.Model): Promise<User.Model>;
  findMany(): Promise<User.Model[]>;
  update(user: User.Model): Promise<User.Model>;
};
