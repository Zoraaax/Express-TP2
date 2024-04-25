import { bookRoutes } from "./bookRoutes.js";
import { generalRoutes } from "./generalRoutes.js";
import { userRoutes } from "./userRoutes.js";

export const routes = (app) => {
  userRoutes(app);
  bookRoutes(app);
  generalRoutes(app);
};
