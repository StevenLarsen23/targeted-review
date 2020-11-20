module.exports = {
  checkUser: async (req, res, next) => {
    if (req.session.user.user_id) {
      next();
    } else {
      res.status(403).send("No user logged in");
    }
  },
};


//-steps of an axios request:
//-1. app.use(express.json())
//-2. app.use(session()) => puts a session object onto the request(req)
//-3. any request level middleware (see above)
//-4. controller