import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="feature-card">
      <div className="feature-card__icon-wrapper">
        {icon}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </article>
  );
};

export default FeatureCard;