import path from "node:path";
import url from "node:url";
import fastify from "fastify";
import autoload from "@fastify/autoload";

const server = fastify({ logger: true });
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

server.register(autoload, {
  dir: path.join(__dirname, "infra", "controllers"),
  dirNameRoutePrefix: false,
});

await server.listen({ port: 3334 });
