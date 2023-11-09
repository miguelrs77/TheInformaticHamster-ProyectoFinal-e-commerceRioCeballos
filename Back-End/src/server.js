const express = require("express");
const app = express();
const cors = require("cors");



// MIDDLEWARES
const { reqMessage, authIsUser } = require("./middleware");

// ROUTES
const {
  signUpRoute,
  loginRoute,
  userRoute,
  preguntaRoute,
  respuestaRoute,
  surveyRoute,
  infoCardRoute,
  uploadRouter
} = require("./routes");

// USE
app.use(cors());
app.use(express.json());
app.use(reqMessage);

app.use("/signup", signUpRoute);
app.use("/login", loginRoute);

app.use("/user", authIsUser, userRoute);
app.use("/pregunta", authIsUser, preguntaRoute);
app.use("/respuesta", authIsUser, respuestaRoute);
app.use("/survey", authIsUser, surveyRoute);
app.use("/infocard", infoCardRoute);
app.use("/upload", uploadRouter);

module.exports = app;
