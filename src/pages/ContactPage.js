import React, { useState } from "react";
import Button from "../components/Button/Button";
import { SendIcon } from "../components/Icons/Icons";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__header">
          <h1 className="contact-page__title">Kontaktujte nás</h1>
          <p className="contact-page__description">
            Máte otázky alebo spätnú väzbu? Radi vám pomôžeme. 
            Vyplňte formulár nižšie a ozveme sa vám čo najskôr.
          </p>
        </div>

        <div className="contact-page__content">
          <div className="contact-page__info">
            <div className="contact-page__info-item">
              <h3>E-mail</h3>
              <a href="mailto:info@pravnyasistent.sk">info@pravnyasistent.sk</a>
            </div>
            <div className="contact-page__info-item">
              <h3>Pracovná doba podpory</h3>
              <p>Pondelok - Piatok: 9:00 - 17:00</p>
            </div>
            <div className="contact-page__info-item">
              <h3>Odpoveď</h3>
              <p>Zvyčajne odpovieme do 24 hodín</p>
            </div>
          </div>

          <div className="contact-page__form-wrapper">
            {submitted ? (
              <div className="contact-page__success">
                <div className="contact-page__success-icon">✓</div>
                <h2>Ďakujeme za vašu správu!</h2>
                <p>Ozveme sa vám čo najskôr.</p>
                <Button 
                  variant="secondary" 
                  onClick={() => setSubmitted(false)}
                >
                  Poslať ďalšiu správu
                </Button>
              </div>
            ) : (
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <div className="contact-page__form-row">
                  <div className="contact-page__form-group">
                    <label htmlFor="name" className="contact-page__label">
                      Meno a priezvisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-page__input"
                      required
                      placeholder="Vaše meno"
                    />
                  </div>
                  <div className="contact-page__form-group">
                    <label htmlFor="email" className="contact-page__label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-page__input"
                      required
                      placeholder="vas@email.sk"
                    />
                  </div>
                </div>

                <div className="contact-page__form-group">
                  <label htmlFor="subject" className="contact-page__label">
                    Predmet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-page__select"
                    required
                  >
                    <option value="">Vyberte predmet</option>
                    <option value="general">Všeobecná otázka</option>
                    <option value="technical">Technický problém</option>
                    <option value="feedback">Spätná väzba</option>
                    <option value="partnership">Spolupráca</option>
                    <option value="other">Iné</option>
                  </select>
                </div>

                <div className="contact-page__form-group">
                  <label htmlFor="message" className="contact-page__label">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-page__textarea"
                    required
                    rows={5}
                    placeholder="Napíšte vašu správu..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large"
                  icon={<SendIcon size={18} />}
                  iconPosition="right"
                >
                  Odoslať správu
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;