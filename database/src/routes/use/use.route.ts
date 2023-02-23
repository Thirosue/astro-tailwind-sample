import { FastifyInstance } from "fastify";
import { findAll } from "./use.service";

export default (app: FastifyInstance) => {
  app.get("/api/uses", async (req, reply) => {
    const id = req.headers["x-user-id"]
      ? parseInt(req.headers["x-user-id"] as string)
      : 1;
    const results = await findAll(id);
    reply.header("Content-Type", "application/json").code(200);
    reply.send(results);
  });
};
