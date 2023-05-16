const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MJjCoHol0R0ogdT8bzTmZaksuiUZvRcV2TWBElXkbDeGZ1kHHtA5yxatkIGpXDaxbf3CiQjnc2GM6JfdLch19CA00vgGccsCF"
);

//API

// - API config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//allow us to send data and pass it in json format

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Receieved for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subuhits of the currency
    currency: "cad",
  });
  //200 is good
  //201 is OK and created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//use it payment.js

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://127.0.0.1:5001/clone-ef99c/us-central1/api
