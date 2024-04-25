import { userController } from "../Controllers/userController.js";

export const userRoutes = (app) => {
  const userControllerInstance = new userController();

  app.get(
    "/utilisateurs",
    userControllerInstance.getAllUsers.bind(userControllerInstance)
  );
  app.get(
    "/utilisateurs/:id",
    userControllerInstance.getUserById.bind(userControllerInstance)
  );
  app.post(
    "/ajout-utilisateur",
    userControllerInstance.createUser.bind(userControllerInstance)
  );
  app.get(
    "/recherche-utilisateur/nom/:nom",
    userControllerInstance.searchUserByName.bind(userControllerInstance)
  );
};
