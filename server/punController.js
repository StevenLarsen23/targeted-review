module.exports = {
  getAllpuns: async (req, res) => {
    const db = req.app.get("db");
    const puns = await db.puns.get_all_puns();
    res.status(200).send(puns);
  },

  getOnePun: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const [pun] = await db.puns.get_one_upn(+id);
    if (pun) {
      res.status(200).send(pun);
    } else {
      res.status(404).send(`I gordn't find anything`);
    }
  },

  addPun: async (req, res) => {
    const db = req.app.get("db");
    const { content } = req.body;
    const { user_id } = req.session.user;
    try {
      const puns = await db.puns.add_pun([content, user_id]);
      res.status(200).send(puns);
    } catch (err) {
      console.log("error adding pun, bugs need squashing", err);
      res.sendStatus(500);
    }
  },

  editPun: async (req, res) => {
    const db = req.app.get("db");
    //-id refers to pun id
    const { id } = req.params;
    const { content } = req.body;

    try {
      const puns = await db.puns.edit_pun([+id, content]);
      res.status(200).send(puns);
    } catch (err) {
      console.log("you can't improve upon perfection", err);
      res.sendStatus(500);
    }
  },

  deletePun: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    try {
      const puns = await db.puns.delete_pun(+id);
      res.status(200).send(puns);
    } catch (err) {
      console.log(`Gourdn't delete such a masterpiece`, err);
      res.sendStatus(500);
    }
  },
};
