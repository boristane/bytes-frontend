import express, { Request } from "express";
import next from "next";
import { ServerResponse } from "http";

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
      app.render(req, res, path, { id });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, () => {
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
