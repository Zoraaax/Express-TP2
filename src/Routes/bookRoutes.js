import { bookController } from "../Controllers/bookController.js";

export const bookRoutes = (app) => {
  const bookControllerInstance = new bookController();

  app.route("/livres").get(controller.getBooks.bind(controller));
  app.route("/livres/:id").get(controller.getBookById.bind(controller));
  app.route("/ajout-livre").post(controller.createBook.bind(controller));
  app
    .route("/livres/auteur/:auteur")
    .get(controller.getBookByAuthor.bind(controller));
};
