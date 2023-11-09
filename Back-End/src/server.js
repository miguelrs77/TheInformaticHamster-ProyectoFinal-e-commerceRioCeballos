const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");//
const path = require("path");//


// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({//
  access_token: "APP_USR-8005534317430798-091718-b982966f21e5ad67337aec6868ccafbb-1483636744",//
});//


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
