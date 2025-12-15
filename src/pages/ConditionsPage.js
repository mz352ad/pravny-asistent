import React from "react";
import "./ConditionsPage.css";

const ConditionsPage = () => {
  return (
    <div className="conditions-page">
      <div className="conditions-page__container">
        <h1 className="conditions-page__title">Podmienky používania</h1>
        <p className="conditions-page__updated">Posledná aktualizácia: december 2025</p>

        <section className="conditions-page__section">
          <h2>1. Úvod</h2>
          <p>
            Vitajte v službe Právny asistent. Používaním tejto služby súhlasíte 
            s týmito podmienkami používania. Prosím, prečítajte si ich pozorne.
          </p>
        </section>

        <section className="conditions-page__section">
          <h2>2. Popis služby</h2>
          <p>
            Právny asistent je informačná služba, ktorá poskytuje odpovede na 
            právne otázky na základe slovenských súdnych rozhodnutí. Služba 
            využíva umelú inteligenciu na analýzu a prezentáciu relevantných 
            právnych informácií.
          </p>
        </section>

        <section className="conditions-page__section">
          <h2>3. Obmedzenie zodpovednosti</h2>
          <p>
            <strong>Dôležité upozornenie:</strong> Informácie poskytované touto 
            službou majú výlučne informačný charakter a nenahrádzajú odborné 
            právne poradenstvo. Pre konkrétne právne prípady vždy odporúčame 
            konzultáciu s kvalifikovaným advokátom.
          </p>
          <p>
            Prevádzkovateľ nezodpovedá za akékoľvek škody vzniknuté v súvislosti 
            s použitím informácií získaných prostredníctvom tejto služby.
          </p>
        </section>

        <section className="conditions-page__section">
          <h2>4. Používanie služby</h2>
          <p>Používateľ sa zaväzuje:</p>
          <ul>
            <li>Používať službu v súlade so zákonom a dobrými mravmi</li>
            <li>Nezneužívať službu na nezákonné účely</li>
            <li>Nezdieľať prístupové údaje s tretími stranami</li>
            <li>Nezasahovať do bezpečnosti a funkčnosti služby</li>
          </ul>
        </section>

        <section className="conditions-page__section">
          <h2>5. Duševné vlastníctvo</h2>
          <p>
            Všetok obsah služby, vrátane softvéru, textov, grafiky a dizajnu, 
            je chránený autorskými právami. Reprodukcia bez súhlasu 
            prevádzkovateľa je zakázaná.
          </p>
        </section>

        <section className="conditions-page__section">
          <h2>6. Zmeny podmienok</h2>
          <p>
            Prevádzkovateľ si vyhradzuje právo kedykoľvek zmeniť tieto podmienky. 
            O významných zmenách budú používatelia informovaní prostredníctvom 
            služby.
          </p>
        </section>

        <section className="conditions-page__section">
          <h2>7. Kontakt</h2>
          <p>
            V prípade otázok týkajúcich sa týchto podmienok nás kontaktujte na 
            adrese: <a href="mailto:info@pravnyasistent.sk">info@pravnyasistent.sk</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ConditionsPage;
