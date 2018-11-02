import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../components/Home.css";

class Home extends Component {
    render() {
        return (
            <div className="home-img">
                <div className="row" id="startRow">
                    <div className="col-md-3 offset-md-9">
                        <Link to="/game">
                            <img id="toStartBtn" src= {require("../components/toStart.png")} alt="start btn"/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;