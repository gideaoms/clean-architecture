import { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { UseCase } from "../../../../core/use-cases/user/find-many/use-case.js";
import { UserRepository } from "../../../repositories/repository.js";

const repositories = { user: new UserRepository() };
const useCase = new UseCase(repositories);

export default async function controller(fastify: FastifyInstance) {
  fastify.withTypeProvider<TypeBoxTypeProvider>().route({
    url: "/users",
    method: "GET",
    async handler(_request, replay) {
      const users = await useCase.exec();
      replay.code(201).send(users);
    },
  });
}
