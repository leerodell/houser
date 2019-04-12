import React, { Component } from "react";
import axios from "axios";

export default class Wizard extends Component {
    constructor(props){
        super(props)
        render() {
            
            return <div className="wizard">{productDisplay}</div>
        }
    }
}