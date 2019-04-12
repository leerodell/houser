import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Houses: []
    };

    this.getAllHouses = this.getAllHouses.bind(this);
    this.deleteCouch = this.deleteCouch.bind(this);
  }

  componentDidMount() {
    this.getAllHouses();
  }

  getAllHouses() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  deleteCouch(id) {
    axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({
        houses: res.data
      });
      // this.getAllHouses()
    });
  }

  render() {
    const { houses } = this.state;

    const houseDisplay = houses.map(prod => {
      return (
        <div className="couch" key={prod.house_id}>
          <h3>{prod.name}</h3>
          <h3>${prod.price}.00</h3>
          <img src={prod.img} alt="couch" />
          <Link to={`/edit/${prod.house_id}`}>Edit</Link>
          <button onClick={() => this.deleteCouch(prod.house_id)}>
            Delete
          </button>
        </div>
      );
    });
    return <div className="dashboard">{houseDisplay}</div>;
  }
}