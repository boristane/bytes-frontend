import express, { Request } from "express";
import next from "next";
import { ServerResponse } from "http";

const expectedEnvVariables = ["URL", "NODE_ENV", "PORT"];

const missingEnvVariables = [];

expectedEnvVariables.forEach(variable => {
  if (!process.env[variable]) {
    missingEnvVariables.push(variable);
  }
});

if (missingEnvVariables.length >= 1) {
  const text = `Missing environement variables: ${missingEnvVariables.join(
    ", "
  )}`;
  console.error(text);
  process.exit(1);
}

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app
  .prepare()
  .then(() => {
    server.get("/p/:id", (req: Request, res: ServerResponse) => {
      const path = "/post";
      const { id } = req.params;
      console.log(req.params);
      return app.render(req, res, path, { id });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, () => {
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
