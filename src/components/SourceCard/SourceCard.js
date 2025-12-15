import React from "react";
import { ExternalLinkIcon } from "../Icons/Icons";
import "./SourceCard.css";

const SourceCard = ({ source }) => {
  return (
    <a 
      href={source.url || "#"} 
      className="source-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="source-card__content">
        <span className="source-card__id">{source.id}</span>
        <span className="source-card__title">{source.title}</span>
        <span className="source-card__court">{source.court}</span>
      </div>
      <ExternalLinkIcon size={16} className="source-card__icon" />
    </a>
  );
};

export default SourceCard;