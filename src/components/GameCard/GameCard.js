import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card" onClick={() => props.setClicked(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} className="img" />
    </div>
    {/* <div className="content">{props.name}</div> */}
  </div>
);

export default GameCard;
