import { dataLivresFilePath, dataUsersFilePath } from "../Config/fetchData.js";
import fs from "fs";
import path from "path";

export class userController {
  constructor() {
    this.dataFilePath = path.resolve(dataUsersFilePath);
    this.data = this.loadData();
  }

  loadData() {
    try {
      const jsonData = fs.readFileSync(this.dataFilePath, "utf-8");
      return JSON.parse(jsonData).users;
    } catch (error) {
      console.error("Erreur lors du chargement des utilisateurs", error);
      return [];
    }
  }

  getAllUsers(req, res) {
    res.status(200).json(this.data);
  }

  getUserById(req, res) {
    const userId = req.params.id;
    const user = this.data.find((user) => user.id === parseInt(userId));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  }

  createUser(req, res) {
    const newUser = req.body;
    newBook.id = this.data.length + 1;
    this.data.push(newUser);
    fs.writeFileSync(this.dataFilePath, JSON.stringify({ users: this.data }));
    res.status(201).json(newUser);
  }

  searchUserByName(req, res) {
    const name = req.params.nom;
    const usersByName = this.data.filter((user) => user.name === name);
    if (usersByName.length > 0) {
      res.status(200).json(usersByName);
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  }
}
