const express = require("express");
const app = express();
const cors = require('cors');
// MIDDLEWARES 
// TODO: aplicar middlewares a las routes ! ! 
const { validateToken, mdwLogging, authCheck } = require("./middleware");
// ROUTES
const { adminRoute, encuestadorRoute, preguntaRoute, infoCardRoute, encuestaRoute, respuestaRoute } = require("./routes");

app.use(cors());
app.use(express.json());

app.get('/')
app.use('/admin', adminRoute);
app.use('/encuestador', encuestadorRoute);
app.use('/infocard', infoCardRoute);
app.use('/pregunta', preguntaRoute);
app.use('/respuesta', respuestaRoute);
app.use('/encuesta', encuestaRoute);

module.exports = app;
