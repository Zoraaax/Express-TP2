import { bookController } from "../Controllers/bookController.js";

export const bookRoutes = (app) => {
  const bookControllerInstance = new bookController();

  app.route("/livres").get(bookControllerInstance.getBooks.bind(controller));
  app
    .route("/livres/:id")
    .get(bookControllerInstance.getBookById.bind(controller));
  app
    .route("/ajout-livre")
    .post(bookControllerInstance.createBook.bind(controller));
  app
    .route("/livres/auteur/:auteur")
    .get(controller.getBookByAuthor.bind(controller));
};
