import { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import { UseCase } from "../../../../core/use-cases/user/create/use-case.js";
import { UserRepository } from "../../../repositories/repository.js";

const repositories = { user: new UserRepository() };
const useCase = new UseCase(repositories);

export default async function controller(fastify: FastifyInstance) {
  fastify.withTypeProvider<TypeBoxTypeProvider>().route({
    url: "/users",
    method: "POST",
    schema: {
      body: Type.Object({
        name: Type.String({ minLength: 1 }),
        email: Type.String({ format: "email" }),
      }),
    },
    async handler(request, replay) {
      const { name, email } = request.body;
      const user = await useCase.exec(name, email);
      replay.code(201).send(user);
    },
  });
}
