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

const digits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
};

app
  .prepare()
  .then(() => {
    server.get("/b/:id", (req: Request, res: ServerResponse) => {
      const path = "/post";
      const { id } = req.params;
      return app.render(req, res, path, { id });
    });

    server.get("/p/:page", (req: Request, res: ServerResponse) => {
      const path = "/";
      const { pageLetters } = req.params;
      const page = digits[pageLetters] ? digits[pageLetters] : "1";
      return app.render(req, res, path, { page });
    });

    server.get("/", (req: Request, res: ServerResponse) => {
      const path = "/";
      const page = "1";
      return app.render(req, res, path, { page });
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
