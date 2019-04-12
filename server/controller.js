module.exports = {
    
    getHouses(req, res) {
      const db = req.app.get("db");
      db.get_houses()
        .then(houses => {
          res.status(200).send(houses);
        })
        .catch(err => {
          console.error("Error in getHouses sql", err);
          res
            .status(500)
            .send({ message: "An Error has occurred on the server", err });
        });
    },
    
    addHouses(req, res) {
      const db = req.app.get("db");
      const { property_name, address, city, state, zip } = req.body;
  
      db.add_house([property_name, address, city, state, zip])
        .then(houses => {
          res.status(200).send(houses);
        })
        .catch(err => {
          console.error("Error in addHouses sql", err);
          res
            .status(500)
            .send({ message: "An Error has occurred on the server", err });
        });
    },
    updateHouse(req, res) {
      let { id } = req.params;
      if (!id) {
        id = req.query.id;
      }
  
      if (!id) {
        return res
          .status(400)
          .send({ message: "Invalid or missing 'id' on request" });
      }
  
      const db = req.app.get("db");
      const { property_name, address, city, state, zip } = req.body;
  
      db.update_house([property_name, address, city, state, zip, id])
        .then(houses => {
          res.status(200).send(houses);
        })
        .catch(err => {
          console.error("Error in updateHouse sql", err);
          res
            .status(500)
            .send({ message: "Server error", err });
        });
    },
    deleteHouse(req, res) {
      let { id } = req.params;
  
      if (!parseInt(id, 10)) {
        return res
          .status(400)
          .send({ message: "Invalid or missing 'id' on request" });
      }
      id = parseInt(id, 10);
      const db = req.app.get("db");
      db.delete_house([id])
        .then(houses => {
          res.status(200).send(houses);
        })
        .catch(err => {
          console.error("Error in deleteHouse sql", err);
          res
            .status(500)
            .send({ message: "An Error has occurred on the server", err });
        });
    }
  };