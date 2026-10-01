"use client";

import { useEffect, useState } from "react";

const INSTAGRAM = "https://www.instagram.com/secretlydonebyher/";
const TIKTOK = "https://www.tiktok.com/@secretlydonebyher717";

const content = {
  en: {
    nav: ["Home", "About", "Nail Art", "Booking"],
    book: "DM TO BOOK",
    location: "LANCASTER, PENNSYLVANIA",
    licensed: "LICENSED NAIL TECHNICIAN",
    heroKicker: "YOUR NEXT NAIL MOMENT",
    heroOne: "Secretly",
    heroTwo: "done by",
    heroThree: "her.",
    heroText:
      "Nail artistry with personality. Discover Secretly Done By Her, a licensed nail technician based in Lancaster, Pennsylvania.",
    heroButton: "BOOK YOUR NEXT SET",
    explore: "DISCOVER MORE",
    marquee: "NAIL ARTISTRY ✦ BY APPOINTMENT ONLY ✦ LANCASTER PA ✦",
    aboutLabel: "01 / BEHIND THE BRAND",
    aboutKicker: "MEET THE ARTIST",
    aboutTitleOne: "A little",
    aboutTitleTwo: "nail magic.",
    aboutLead: "Your nails are part of your look. Make them yours.",
    aboutText:
      "Secretly Done By Her is a licensed nail technician based in Lancaster, PA. Explore her nail artistry on Instagram and get in touch directly to discuss your next appointment.",
    viewInstagram: "EXPLORE INSTAGRAM",
    artLabel: "02 / THE NAIL EDIT",
    artKicker: "THE CREATIVE SIDE",
    artTitleOne: "It's all in",
    artTitleTwo: "the details.",
    artText:
      "Every nail look starts with an idea. Visit the official Instagram portfolio to explore her published work, discover inspiration and share the look you have in mind.",
    portfolio: "VIEW REAL NAIL WORK",
    cardOne: "Your inspiration.",
    cardTwo: "Your style.",
    cardThree: "Your next set.",
    cardSub: "EXPLORE ON INSTAGRAM",
    statementOne: "Nails speak",
    statementTwo: "without words.",
    bookingLabel: "03 / APPOINTMENTS",
    bookingKicker: "READY FOR YOUR NEXT SET?",
    bookingTitleOne: "Let's make",
    bookingTitleTwo: "it happen.",
    bookingText:
      "Appointments are arranged directly through Instagram DM. Send your nail inspiration and enquire about availability with the artist.",
    bookingNote: "BY APPOINTMENT ONLY",
    languageNote: "ENGLISH & ESPAÑOL",
    bookingButton: "MESSAGE TO BOOK",
    socialLabel: "FOLLOW THE ARTIST",
    socialTitleOne: "Stay in",
    socialTitleTwo: "the loop.",
    socialText:
      "See published nail work and follow Secretly Done By Her on Instagram and TikTok.",
    footerTag: "LICENSED NAIL TECHNICIAN · LANCASTER, PA",
    back: "BACK TO TOP",
  },
  es: {
    nav: ["Inicio", "Sobre mí", "Nail Art", "Citas"],
    book: "RESERVAR POR DM",
    location: "LANCASTER, PENSILVANIA",
    licensed: "TÉCNICA DE UÑAS CON LICENCIA",
    heroKicker: "TU PRÓXIMO SET DE UÑAS",
    heroOne: "Secretly",
    heroTwo: "done by",
    heroThree: "her.",
    heroText:
      "Arte en uñas con personalidad. Conoce Secretly Done By Her, una técnica de uñas con licencia ubicada en Lancaster, Pensilvania.",
    heroButton: "CONSULTAR TU PRÓXIMA CITA",
    explore: "DESCUBRE MÁS",
    marquee: "ARTE EN UÑAS ✦ SOLO CON CITA ✦ LANCASTER PA ✦",
    aboutLabel: "01 / DETRÁS DE LA MARCA",
    aboutKicker: "CONOCE A LA ARTISTA",
    aboutTitleOne: "Un toque",
    aboutTitleTwo: "de magia.",
    aboutLead: "Tus uñas son parte de tu estilo. Hazlas tuyas.",
    aboutText:
      "Secretly Done By Her es una técnica de uñas con licencia ubicada en Lancaster, PA. Descubre sus trabajos en Instagram y comunícate directamente para consultar sobre tu próxima cita.",
    viewInstagram: "EXPLORAR INSTAGRAM",
    artLabel: "02 / EL ARTE EN UÑAS",
    artKicker: "EL LADO CREATIVO",
    artTitleOne: "Todo está",
    artTitleTwo: "en los detalles.",
    artText:
      "Cada diseño comienza con una idea. Visita su Instagram oficial para descubrir trabajos publicados, encontrar inspiración y compartir el estilo que tienes en mente.",
    portfolio: "VER SUS TRABAJOS",
    cardOne: "Tu inspiración.",
    cardTwo: "Tu estilo.",
    cardThree: "Tu próximo set.",
    cardSub: "EXPLORAR EN INSTAGRAM",
    statementOne: "Tus uñas hablan",
    statementTwo: "sin palabras.",
    bookingLabel: "03 / CITAS",
    bookingKicker: "¿LISTA PARA TU PRÓXIMO SET?",
    bookingTitleOne: "Hagámoslo",
    bookingTitleTwo: "realidad.",
    bookingText:
      "Las citas se coordinan directamente por mensaje privado en Instagram. Envía tu inspiración y consulta la disponibilidad con la artista.",
    bookingNote: "SOLO CON CITA PREVIA",
    languageNote: "ENGLISH & ESPAÑOL",
    bookingButton: "ENVIAR MENSAJE",
    socialLabel: "SIGUE A LA ARTISTA",
    socialTitleOne: "Mantente",
    socialTitleTwo: "al día.",
    socialText:
      "Descubre sus trabajos publicados y sigue Secretly Done By Her en Instagram y TikTok.",
    footerTag: "TÉCNICA DE UÑAS CON LICENCIA · LANCASTER, PA",
    back: "VOLVER ARRIBA",
  },
};

type Language = keyof typeof content;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function switchLanguage() {
    setLanguage((current) => (current === "en" ? "es" : "en"));
    setMenuOpen(false);
  }

  const navigation = [
    { label: t.nav[0], href: "#top" },
    { label: t.nav[1], href: "#about" },
    { label: t.nav[2], href: "#nail-art" },
    { label: t.nav[3], href: "#booking" },
  ];

  return (
    <main id="top">
      {/* HEADER */}

      <header className={`header ${menuOpen ? "header-open" : ""}`}>
        <a href="#top" className="brand" onClick={closeMenu}>
          <span>secretly.</span>
          <small>DONE BY HER ✦</small>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="language-button"
            onClick={switchLanguage}
            aria-label={
              language === "en" ? "Switch to Spanish" : "Cambiar a inglés"
            }
          >
            {language === "en" ? "ES" : "EN"} ↗
          </button>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="header-book"
          >
            {t.book} <Arrow />
          </a>

          <button
            type="button"
            className={`hamburger ${menuOpen ? "active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-navigation ${menuOpen ? "visible" : ""}`}
          aria-hidden={!menuOpen}
        >
          <span className="mobile-overline">SECRETLY DONE BY HER</span>

          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-bottom">
            <button type="button" onClick={switchLanguage}>
              {language === "en" ? "ESPAÑOL ↗" : "ENGLISH ↗"}
            </button>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t.book} <Arrow />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-meta">
            <span>{t.location}</span>
            <span>{t.licensed}</span>
          </div>

          <div className="hero-content">
            <span className="eyebrow">{t.heroKicker} ✦</span>

            <h1>
              {t.heroOne}
              <br />
              <em>{t.heroTwo}</em>
              <br />
              {t.heroThree}
            </h1>

            <p>{t.heroText}</p>

            <div className="hero-links">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-burgundy"
              >
                {t.heroButton} <Arrow />
              </a>

              <a href="#about" className="inline-link">
                {t.explore} ↓
              </a>
            </div>
          </div>

          <div className="hero-foot">
            <span>EST. IN LANCASTER, PA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Decorative burgundy and pink nail studio branding">
          <div className="hero-art-border">
            <span className="art-top">THE NAIL EDIT ✦ SECRETLY DONE BY HER</span>

            <div className="art-halo halo-outer" />
            <div className="art-halo halo-middle" />
            <div className="art-halo halo-inner" />

            <div className="art-wordmark">
              <span>done</span>
              <em>by her.</em>
              <b>✦</b>
            </div>

            <span className="art-bottom">NAIL ARTISTRY · LANCASTER PA</span>
          </div>

          <div className="art-seal">
            <span>✦</span>
            <small>BY HER</small>
          </div>
        </div>
      </section>

      {/* MARQUEE */}

      <div className="marquee" aria-hidden="true">
        {t.marquee} {t.marquee}
      </div>

      {/* ABOUT */}

      <section className="about section-pad" id="about">
        <div className="section-heading">
          <span>{t.aboutLabel}</span>
          <span>SECRETLY DONE BY HER</span>
        </div>

        <div className="about-grid">
          <div className="about-title">
            <span className="eyebrow">{t.aboutKicker}</span>

            <h2>
              {t.aboutTitleOne}
              <br />
              <em>{t.aboutTitleTwo}</em>
            </h2>

            <span className="about-flower">✳</span>
          </div>

          <div className="about-description">
            <h3>{t.aboutLead}</h3>
            <p>{t.aboutText}</p>

            <div className="about-tags">
              <span>{t.licensed}</span>
              <span>{t.languageNote}</span>
              <span>{t.bookingNote}</span>
            </div>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="underlined"
            >
              {t.viewInstagram} <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* NAIL ART */}

      <section className="nail-art section-pad" id="nail-art">
        <div className="section-heading">
          <span>{t.artLabel}</span>
          <span>THE SECRETLY EDIT ✦</span>
        </div>

        <div className="art-intro">
          <div>
            <span className="eyebrow">{t.artKicker}</span>

            <h2>
              {t.artTitleOne}
              <br />
              <em>{t.artTitleTwo}</em>
            </h2>
          </div>

          <div className="art-intro-right">
            <p>{t.artText}</p>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="underlined"
            >
              {t.portfolio} <Arrow />
            </a>
          </div>
        </div>

        <div className="art-cards">
          {[
            { title: t.cardOne, className: "card-one", number: "01" },
            { title: t.cardTwo, className: "card-two", number: "02" },
            { title: t.cardThree, className: "card-three", number: "03" },
          ].map((card) => (
            <a
              key={card.number}
              className={`art-card ${card.className}`}
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-head">
                <span>{card.number} / SECRETLY EDIT</span>
                <span>↗</span>
              </div>

              <div className="card-shape">
                <span>✦</span>
              </div>

              <div className="card-foot">
                <h3>{card.title}</h3>
                <span>{t.cardSub}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* STATEMENT */}

      <section className="statement">
        <span>SECRETLY DONE BY HER ✦</span>

        <h2>
          {t.statementOne}
          <br />
          <em>{t.statementTwo}</em>
        </h2>

        <b>✳</b>
      </section>

      {/* BOOKING */}

      <section className="booking section-pad" id="booking">
        <div className="section-heading">
          <span>{t.bookingLabel}</span>
          <span>LANCASTER, PA</span>
        </div>

        <div className="booking-grid">
          <div className="booking-copy">
            <span className="eyebrow">{t.bookingKicker}</span>

            <h2>
              {t.bookingTitleOne}
              <br />
              <em>{t.bookingTitleTwo}</em>
            </h2>

            <p>{t.bookingText}</p>

            <div className="booking-badges">
              <span>✦ {t.bookingNote}</span>
              <span>✦ {t.languageNote}</span>
            </div>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-burgundy"
            >
              {t.bookingButton} <Arrow />
            </a>
          </div>

          <div className="booking-visual">
            <div className="booking-outline outline-one" />
            <div className="booking-outline outline-two" />

            <div className="booking-visual-word">
              <span>your next</span>
              <strong>set.</strong>
              <b>✦</b>
            </div>

            <span className="booking-visual-foot">
              SECRETLY DONE BY HER
            </span>
          </div>
        </div>
      </section>

      {/* SOCIAL */}

      <section className="social section-pad">
        <div className="section-heading">
          <span>{t.socialLabel}</span>
          <span>STAY CONNECTED ✦</span>
        </div>

        <div className="social-grid">
          <div>
            <h2>
              {t.socialTitleOne}
              <br />
              <em>{t.socialTitleTwo}</em>
            </h2>

            <p>{t.socialText}</p>
          </div>

          <div className="social-links">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <span>INSTAGRAM</span>
              <span>↗</span>
            </a>

            <a href={TIKTOK} target="_blank" rel="noopener noreferrer">
              <span>TIKTOK</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-meta">
          <span>{t.footerTag}</span>
          <span>ENGLISH / ESPAÑOL</span>
        </div>

        <div className="footer-wordmark">
          secretly<span>✦</span>
          <small>DONE BY HER</small>
        </div>

        <div className="footer-bottom">
          <span>SECRETLY DONE BY HER</span>

          <div>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              INSTAGRAM ↗
            </a>

            <a href={TIKTOK} target="_blank" rel="noopener noreferrer">
              TIKTOK ↗
            </a>

            <a href="#top">{t.back} ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}