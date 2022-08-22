import React from "react";
import { Link } from "react-router-dom";
import { ITech } from "../../../../providers/tech";

interface ITechCardProps {
  tech: ITech;
}

const TechCard = ({ tech: { id, title, status } }: ITechCardProps) => {
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
