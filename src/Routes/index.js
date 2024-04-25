import { bookRoutes } from "./bookRoutes.js";
import { userRoutes } from "./userRoutes.js";

export const routes = (app) => {
  userRoutes(app);
  bookRoutes(app);
};
