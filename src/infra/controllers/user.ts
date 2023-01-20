import { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import * as services from "../../core/services/mod";
import * as repositories from "../repositories/mod";

const userRepository = new repositories.user.Repository();
const userService = new services.user.Service(userRepository);

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
      const createdUser = await userService.create(name, email);
      replay.code(201).send(createdUser);
    },
  });

  fastify.withTypeProvider<TypeBoxTypeProvider>().route({
    url: "/users",
    method: "GET",
    async handler(request, replay) {
      const users = await userService.findMany();
      replay.code(200).send(users);
    },
  });
}
