const functions = require("firebase-functions");
const express = require("express");

const app = express();
app.get("/timestamp", (Request, Response) => {
  Response.send(`${Date.now()}`);
});
exports.helloWorld = functions.https.onRequest(app);
