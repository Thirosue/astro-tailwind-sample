import fastify from "fastify";
import useRoute from "./routes/use/use.route";
import accountRoute from "./routes/account/account.route";

const server = fastify();
useRoute(server);
accountRoute(server);

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
