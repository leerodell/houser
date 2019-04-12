const express = require("express");
const massive = require("massive");
const controller = require("./controller");
require("dotenv").config();
const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  dbInstance.init();
  console.log("Successfully Connected to Database");
});


//**ENDPOINTS**
app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.addHouse);
app.put("/api/houses/:id", controller.updateHouse);
// app.put("/api/houses", controller.updateHouse);
app.delete("/api/houses", controller.deleteHouse);
app.listen(SERVER_PORT || 4005, () =>
  console.log(`Server started, port: SERVER_PORT`)
);
