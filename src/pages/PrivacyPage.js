import React from "react";
import "./PrivacyPage.css";

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-page__container">
        <h1 className="privacy-page__title">Ochrana súkromia</h1>
        <p className="privacy-page__updated">Posledná aktualizácia: december 2025</p>

        <section className="privacy-page__section">
          <h2>1. Úvod</h2>
          <p>
            Ochrana vašich osobných údajov je pre nás prioritou. Tieto zásady 
            ochrany súkromia vysvetľujú, ako zhromažďujeme, používame a chránime 
            vaše údaje pri používaní služby Právny asistent.
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>2. Aké údaje zhromažďujeme</h2>
          <p>Pri používaní služby môžeme zhromažďovať:</p>
          <ul>
            <li><strong>Údaje o používaní:</strong> otázky zadané do chatbota, história konverzácií</li>
            <li><strong>Technické údaje:</strong> IP adresa, typ prehliadača, operačný systém</li>
            <li><strong>Údaje o účte:</strong> e-mailová adresa (pri registrácii)</li>
          </ul>
        </section>

        <section className="privacy-page__section">
          <h2>3. Ako používame vaše údaje</h2>
          <p>Vaše údaje používame na:</p>
          <ul>
            <li>Poskytovanie a zlepšovanie služby</li>
            <li>Personalizáciu používateľského zážitku</li>
            <li>Analýzu a štatistické účely</li>
            <li>Zabezpečenie bezpečnosti služby</li>
          </ul>
        </section>

        <section className="privacy-page__section">
          <h2>4. Uchovávanie údajov</h2>
          <p>
            Vaše údaje uchovávame len po dobu nevyhnutnú na dosiahnutie účelov, 
            na ktoré boli zhromaždené, alebo po dobu vyžadovanú právnymi predpismi.
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>5. Zdieľanie údajov</h2>
          <p>
            Vaše osobné údaje nezdieľame s tretími stranami s výnimkou prípadov, 
            keď je to nevyhnutné na poskytovanie služby alebo keď nám to ukladá zákon.
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>6. Vaše práva</h2>
          <p>V súlade s GDPR máte právo:</p>
          <ul>
            <li>Na prístup k vašim osobným údajom</li>
            <li>Na opravu nesprávnych údajov</li>
            <li>Na vymazanie údajov („právo byť zabudnutý")</li>
            <li>Na prenosnosť údajov</li>
            <li>Namietať proti spracúvaniu</li>
          </ul>
        </section>

        <section className="privacy-page__section">
          <h2>7. Cookies</h2>
          <p>
            Naša služba používa cookies na zlepšenie používateľského zážitku. 
            Môžete nastaviť svoj prehliadač tak, aby cookies odmietal, avšak 
            niektoré funkcie služby nemusia byť dostupné.
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>8. Kontakt</h2>
          <p>
            Ak máte otázky týkajúce sa ochrany súkromia, kontaktujte nás na: {" "}
            <a href="mailto:privacy@pravnyasistent.sk">privacy@pravnyasistent.sk</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;