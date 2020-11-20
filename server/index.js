require("dotenv").config();

const express = require("express");
const massive = require("massive");
const session = reqire("express-session");

const punCtrl = require("./punController");
const userCtrl = require("./userController");
const { checkUser } = require("./middleware");

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
),
  massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  })
    .then((db) => {
      app.set("db", db);
      console.log("database online");
    })
    .catch((err) => console.log("Database error: " + err));

//!ENDPOINTS
//-user endpoints
// get user, login, register, logout, edit
// api = application program innerface
app.get("/api/user", checkUser, userCtrl.getUser);
app.put("/api/user", checkUser, userCtrl.editUser);
app.post("/api/login", userCtrl.login);
app.delete("/api/logout", userCtrl.logout);
app.post("/api/register", userCtrl.register);

//-pun endpoints
app.get("/api/puns", punCtrl.getAllpuns);
app.get("/api/puns/:id", punCtrl.getOnePun);
app.post("/api/puns", checkUser, punCtrl.addPun);
app.put("/api/puns/:id", checkUser, punCtrl.editPun);
app.delete("/api/puns/:id", checkUser, punCtrl.deletePun);

app.listen(SERVER_PORT, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);
