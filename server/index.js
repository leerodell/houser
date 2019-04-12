const express = require("express");
const massive = require("massive");

require("dotenv").config();
const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)