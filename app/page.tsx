const Arrow = () => <span aria-hidden="true">↗</span>;

const Spark = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M12 2c.5 5.8 3.7 9 9 10-5.3 1-8.5 4.2-9 10-.5-5.8-3.7-9-9-10 5.3-1 8.5-4.2 9-10Z" />
  </svg>
);

const features = [
  {
    number: "01",
    title: "Samla allt på en plats",
    text: "Samtal, idéer, beslut och uppgifter hör ihop. I socco slipper ni leta mellan olika verktyg.",
    tone: "mustard",
  },
  {
    number: "02",
    title: "Gör nästa steg tydligt",
    text: "Alla ser vad som händer, vem som gör vad och när det är dags att följa upp.",
    tone: "lavender",
  },
  {
    number: "03",
    title: "Få fler att bidra",
    text: "En varm och enkel arbetsyta gör det lättare för varje person att komma till tals.",
    tone: "coral",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="socco, startsida">
          socco
        </a>
        <nav aria-label="Huvudmeny">
          <a href="#funktioner">Funktioner</a>
          <a href="#sa-fungerar-det">Så fungerar det</a>
          <a href="#om">Om socco</a>
        </nav>
        <a className="header-cta" href="#kontakt">
          Prova socco <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            En plats för gemensam riktning
          </p>
          <h1>
            Samarbete som
            <br />
            faktiskt känns <em>enkelt.</em>
          </h1>
          <p className="hero-lead">
            Samla människor, idéer och nästa steg på en plats – så att fler kan
            bidra och mindre faller mellan stolarna.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kontakt">
              Kom igång <Arrow />
            </a>
            <a className="text-link" href="#sa-fungerar-det">
              Se hur det fungerar <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="trust-row" aria-label="Fördelar">
            <span>Ingen installation</span>
            <span>Kom igång på minuter</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Människor som samarbetar">
          <div className="visual-blob" />
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <img
            src="/socco-collaboration.png"
            alt="Illustration av en grupp människor som samlas kring en gemensam plan"
          />
          <div className="floating-note note-one">
            <span className="mini-icon">✓</span>
            <div>
              <strong>Nästa steg</strong>
              <small>Alla vet vad som händer</small>
            </div>
          </div>
          <div className="floating-note note-two">
            <span className="avatar-stack" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <div>
              <strong>5 personer</strong>
              <small>Bidrar just nu</small>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Socco i korthet">
        <p>Från många perspektiv</p>
        <Spark />
        <p>till en gemensam riktning</p>
        <Spark />
        <p>och tydliga nästa steg</p>
      </section>

      <section className="feature-section" id="funktioner">
        <div className="section-heading">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Byggt för verkligt samarbete
          </p>
          <h2>När alla ser helheten blir det lättare att gå framåt.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className={`feature-card ${feature.tone}`} key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className="feature-symbol" aria-hidden="true">
                {feature.number === "01" && "◎"}
                {feature.number === "02" && "↗"}
                {feature.number === "03" && "✦"}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section" id="sa-fungerar-det">
        <div className="steps-copy">
          <p className="eyebrow light">
            <span className="eyebrow-dot" />
            Så fungerar det
          </p>
          <h2>En lugnare väg från tanke till handling.</h2>
          <p>
            Socco ger gruppen ett gemensamt rum där det är lätt att förstå
            sammanhanget och ta ansvar för nästa steg.
          </p>
          <a className="button button-peach" href="#kontakt">
            Upptäck socco <Arrow />
          </a>
        </div>
        <ol className="steps-list">
          <li>
            <span>1</span>
            <div>
              <h3>Bjud in gruppen</h3>
              <p>Skapa en trygg gemensam plats för teamet eller nätverket.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h3>Samla det som är viktigt</h3>
              <p>Fånga perspektiv, frågor, beslut och uppgifter i sitt sammanhang.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h3>Gå framåt tillsammans</h3>
              <p>Följ nästa steg utan att tappa människorna eller helheten.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="about-section" id="om">
        <div className="about-mark" aria-hidden="true">
          <span>s</span>
          <Spark />
        </div>
        <div>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Om socco
          </p>
          <h2>Teknik ska ge plats åt människor – inte stå i vägen.</h2>
          <p>
            Därför är socco byggt kring tydlighet, delaktighet och omtanke. En
            samarbetsyta som känns mänsklig, även när arbetet är komplext.
          </p>
        </div>
      </section>

      <section className="final-cta" id="kontakt">
        <Spark className="cta-spark" />
        <p className="eyebrow light">
          <span className="eyebrow-dot" />
          Redo när ni är
        </p>
        <h2>Skapa mer tillsammans.</h2>
        <p>Börja samla människor, idéer och nästa steg i socco.</p>
        <a className="button button-peach" href="mailto:hej@socco.se">
          Kontakta oss <Arrow />
        </a>
      </section>

      <footer>
        <a className="wordmark" href="#top">
          socco
        </a>
        <p>Socialt samarbete, gjort enklare.</p>
        <p>© 2026 socco</p>
      </footer>
    </main>
  );
}
