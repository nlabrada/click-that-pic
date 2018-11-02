import React from "react";
import "./Cards.css";

const Cards = props => (
    <div className="card">
        <img className="card-img-top cardImg" src={ props.image } alt={ props.name } onClick = { () => props.checkClick(props.id)} />
    </div>
);

export default Cards;
