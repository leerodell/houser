import React, { Component } from "react";
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        render() {
            
            return <div className="dashboard">{productDisplay}</div>
        }
    }
}