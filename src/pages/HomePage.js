import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import { BalanceScaleIcon, ChatIcon, LightningIcon, BookmarkIcon } from "../components/Icons/Icons";
import { sampleQuestions } from "../data/courtCases";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__icon">
            <BalanceScaleIcon size={48} />
          </div>
          <h1 className="hero__title">Právny asistent</h1>
          <p className="hero__description">
            Pýtajte sa právnych otázok na základe slovenských súdnych rozhodnutí. 
            Rýchle a presné odpovede založené na skutočnej judikatúre.
          </p>
          <Link to="/chat">
            <Button 
              variant="primary" 
              size="large" 
              icon={<ChatIcon size={20} />}
            >
              Začať chat
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <div className="features__grid">
            <FeatureCard
              icon={<BalanceScaleIcon size={24} />}
              title="Súdne rozhodnutia"
              description="Odpovede založené na skutočných rozhodnutiach slovenských súdov"
            />
            <FeatureCard
              icon={<LightningIcon size={24} />}
              title="Rýchle odpovede"
              description="Získajte relevantné právne informácie v priebehu niekoľkých sekúnd"
            />
            <FeatureCard
              icon={<BookmarkIcon size={24} />}
              title="Citované zdroje"
              description="Každá odpoveď obsahuje odkazy na relevantné súdne rozhodnutia"
            />
          </div>
        </div>
      </section>

      {/* Sample Questions Section */}
      <section className="sample-questions">
        <div className="sample-questions__container">
          <h2 className="sample-questions__title">Príklady otázok</h2>
          <p className="sample-questions__description">
            Neviete ako začať? Skúste jednu z týchto otázok:
          </p>
          <div className="sample-questions__grid">
            {sampleQuestions.map((question, index) => (
              <Link 
                key={index} 
                to={`/chat?q=${encodeURIComponent(question)}`}
                className="sample-questions__item"
              >
                <ChatIcon size={16} />
                <span>{question}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">Máte právnu otázku?</h2>
          <p className="cta__description">
            Začnite konverzáciu s naším právnym asistentom a získajte odpovede 
            podložené skutočnými súdnymi rozhodnutiami.
          </p>
          <Link to="/chat">
            <Button variant="primary" size="large">
              Položiť otázku
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
