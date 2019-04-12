import React, { Component } from "react";
import axios from "axios";
import "./dashboard.css"
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };

    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({
        houses: res.data
      });

    });
  }

  render() {
    const { houses } = this.state;

    const houseDisplay = houses.map(house => {
      return (
        <div className="house" key={house.house_id}>
          <h3>{house.property_name}</h3>
          <h3>{house.address}</h3>
          <h3>{house.city}</h3>
          <h3>{house.state}</h3>
          <h3>{house.zip}</h3>
          
          <Link to={`/edit/${house.house_id}`}>Edit</Link>
          <button onClick={() => this.deleteHouse(house.house_id)}>
            Delete
          </button>
        </div>
      );
    });
    return <div className="dashboard">{houseDisplay}</div>;
  }
}