export const generalRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send(
      "<ul><li><a href=/bienvenue>Bienvenue</a></li><li><a href=/info>Info</a></li><li><a href=/acces-interdit>Acces Interdit</a></li><li><a href=/redirection-accueil>Redirection Accueil</a></li></ul>"
    );
  });

  app.get("/redirection-accueil", (req, res) => {
    res.redirect("/");
  });

  app.get("/bienvenue", (req, res) => {
    res.send("Bonjour, bienvenue sur mon app express");
  });

  app.get("/info", (req, res) => {
    res.json({
      nom: "Larké",
      prenom: "Jean-Michel",
      age: 42,
    });
  });

  app.get("/acces-interdit", (req, res) => {
    res.status(403).send("Accès interdit");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  app.get("*", (req, res) => {
    res.status(404).send("Page introuvable");
  });
};
