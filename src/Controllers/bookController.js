import { dataFilePath } from "../Config/fetchData.js";
import fs from "fs";
import path from "path";

export class bookController {
  constructor() {
    this.dataFilePath = path.resolve(dataFilePath);
    this.data = this.loadData();
  }

  loadData() {
    try {
      const jsonData = fs.readFileSync(this.dataFilePath, "utf-8");
      return JSON.parse(jsonData).livres;
    } catch (error) {
      console.error("Erreur lors du chargement des livres", error);
      return [];
    }
  }

  getBooks(req, res) {
    res.status(200).json(this.data);
  }

  getBookById(req, res) {
    const bookId = req.params.id;
    const book = this.data.find((book) => book.id === parseInt(bookId));
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Livre non trouvé" });
    }
  }

  createBook(req, res) {
    const newBook = req.body;
    newBook.id = this.data.length + 1;
    this.data.push(newBook);
    fs.writeFileSync(this.dataFilePath, JSON.stringify({ livres: this.data }));
    res.status(201).json(newBook);
  }

  getBookByAuthor(req, res) {
    const author = req.params.author;
    const booksByAuthor = this.data.filter((book) => book.auteur === author);
    if (booksByAuthor.length > 0) {
      res.status(200).json(booksByAuthor);
    } else {
      res.status(404).json({ message: "Auteur non trouvé" });
    }
  }
}
