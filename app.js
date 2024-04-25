import express from "express";
import { routes } from "./src/Routes/index.js";

const APP = express();
const PORT = 8080;

APP.use(express.static("public"));

routes(APP);

APP.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
