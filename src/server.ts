import { Server } from "http";
import app from "./app";

let server: Server;

const main = async () => {
  const port = 5000;
  server = app.listen(5000, () =>
    console.log(`Server is Running: \n>> http://localhost:${port}`),
  );
};

main();
