import React from "react";
import { Link } from "react-router-dom";

const TechCard = ({ tech: { id, title, status } }) => {
  return (
    <li>
      <Link to={`tech/${id}`}>
        <h4>{title}</h4>
        <span>{status}</span>
      </Link>
    </li>
  );
};

export default TechCard;
