/* eslint-disable max-len */
// Setup to get the backend express app runnning on a Cloud function
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51NDPsySE2IDDGCniH6wn0wNwCfEDwg1WaXOwg2ONnlgYMNMtVF7Hmpfq36QGiC2IgqKkugO8frie9OSfkCqUY4yS000R9W3AhA",
);

// To set up an API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));// Cors can be thought of as for security
app.use(express.json());// This will allow us to send data and  pass data in json format

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/richa", (request, response) => response.status(200).send("HELLO RICHA"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    data: {clientSecret: paymentIntent.client_secret},
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/shopopia/us-central1/api
