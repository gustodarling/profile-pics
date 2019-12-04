import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img alt="profile" src={""} />
    <h2> {props.profile.name} </h2>
    <p> {props.profile.email} </p>
  </div>
);
