import { FastifyInstance } from "fastify";
import { findFirst } from "./account.service";

export default (app: FastifyInstance) => {
  app.get("/api/get/account", async (req, reply) => {
    const id = req.headers["x-user-id"]
      ? parseInt(req.headers["x-user-id"] as string)
      : 1;
    const results = await findFirst(id);
    reply.header("Content-Type", "application/json").code(200);
    reply.send(results);
  });
};
