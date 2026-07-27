import Image from 'next/image';

const groupLinks = [
  { label: 'Teams', value: 'Live' },
  { label: 'Media', value: 'Live' },
  { label: 'Tech', value: 'Live' },
];

const marketStats = [
  { value: '$12B', text: 'African sports market today, projected to surpass $20B by 2035.' },
  { value: '600M+', text: 'Sports fans across the continent.' },
  { value: '225M', text: 'Amateur footballers in Africa.' },
  { value: '<2%', text: 'Of athlete IP currently monetised.' },
];

const targetItems = [
  { value: '500+', text: 'Youth athletes on structured pathways' },
  { value: '5', text: 'Academy & league hubs' },
  { value: '1000+', text: 'Direct & indirect jobs created' },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container site-header__inner">
          <a href="#home" className="brand" aria-label="Talent50 home">
            <Image src="/assets/logo-white.png" alt="Talent 50" width={140} height={38} />
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#about">What we do</a>
            <a href="#group">The group</a>
            <a href="#market">Market</a>
            <a href="#impact">Impact</a>
            <a href="#contact" className="nav-cta">Partner with us</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero__backdrop" />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <div className="eyebrow">Talent50 Group</div>
          <h1>
            Building the <span>missing middle</span> of African sport.
          </h1>
          <p className="hero__copy">
            The Talent50 Group unlocks the value of African sports, turning potential into assets.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--light">Partner with us</a>
            <a href="#engine" className="btn btn--ghost">See how it works</a>
          </div>
        </div>
        <div className="scroll-cue">Scroll <span>↓</span></div>
      </section>

      <section id="about" className="section section--light">
        <div className="container about-grid">
          <div>
            <div className="eyebrow eyebrow--dark">WhO we are</div>
            <h2 className="section-title section-title--dark">
              We build the missing middle: the layer between world-class, grassroots talent and the global stage.
            </h2>
            <p className="section-body section-body--dark">
              We are a bridge between passion and professionalism, turning raw talent into global success stories, across every sport we touch.
            </p>
          </div>
          <div className="panel panel--dark">
            <div className="mini-label">The group — all live</div>
            <div className="group-links">
              {groupLinks.map((item) => (
                <div className="group-link" key={item.label}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section section--dark">
        <div className="container">
          <div className="eyebrow eyebrow--light">01 — The opportunity</div>
          <h2 className="section-title section-title--light max-18ch">
            Strong at the top. Strong at the bottom. Hollow in between.
          </h2>
          <p className="section-body section-body--light max-32ch">
            Africa produces world-class talent the world pays a fortune for, but only once it leaves. Grassroots receives less than 5% of national sports budgets, and the sector runs on almost no fan data. That gap is the opportunity.
          </p>
        </div>
      </section>

      <section id="group" className="section section--light">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="eyebrow eyebrow--dark">02 — The group</div>
              <h2 className="section-title section-title--dark">One group. Three pillars.</h2>
            </div>
            <p className="section-body section-body--dark max-32ch">
              The Talent50 Group builds and operates sports assets such as teams, the media that carries them, and the technology that connects both to fans and markets.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
              <div className="pillar-card__top">
                <strong>01</strong>
                <span>Live</span>
              </div>
              <h3>Teams</h3>
              <div className="pillar-card__kicker">Football, esports &amp; more</div>
              <p>We build and own teams across sports, starting with Firecrackers FC and extending into esports and beyond.</p>
              <a href="https://firecrackersfc.com" target="_blank" rel="noopener noreferrer">firecrackersfc.com</a>
            </article>

            <article className="pillar-card">
              <div className="pillar-card__top">
                <strong>02</strong>
                <span>Live</span>
              </div>
              <h3>Media</h3>
              <div className="pillar-card__kicker">Content &amp; channels</div>
              <p>Owned content and channels that turn our teams and talent into stories, audiences and reach.</p>
              <a href="https://talent50.com" target="_blank" rel="noopener noreferrer">talent50.com</a>
            </article>

            <article className="pillar-card">
              <div className="pillar-card__top">
                <strong>03</strong>
                <span>Live</span>
              </div>
              <h3>Tech</h3>
              <div className="pillar-card__kicker">Sports tech &amp; data</div>
              <p>The tools and data layer connecting our teams, athletes and fans across every sport we operate in.</p>
              <a href="#contact">Contact</a>
            </article>
          </div>
        </div>
      </section>

      <section id="market" className="section section--light">
        <div className="container">
          <div className="eyebrow eyebrow--dark">03 — The market</div>
          <h2 className="section-title section-title--dark max-20ch">
            A continent-sized audience, almost entirely unmonetised.
          </h2>
          <p className="section-body section-body--dark max-32ch">
            Africa is the last major untapped sports market.
          </p>
          <div className="market-grid">
            {marketStats.map((item) => (
              <div className="market-card" key={item.value}>
                <div className="market-card__value">{item.value}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engine" className="section section--dark">
        <div className="container">
          <div className="eyebrow eyebrow--light">04 — The advantage</div>
          <h2 className="section-title section-title--light max-20ch">
            Everything we do compounds into one advantage.
          </h2>
          <div className="engine-highlight">
            <span>Teams</span>
            <span className="engine-highlight__plus">+</span>
            <span>Media</span>
            <span className="engine-highlight__plus">+</span>
            <span>Tech</span>
            <span className="engine-highlight__equals">=</span>
            <span className="engine-highlight__accent">The Talent 50 advantage</span>
          </div>
          <blockquote>
            We own the teams, the channels that reach the fans, and the tech that connects them, so <span>each part makes the others stronger.</span>
          </blockquote>
        </div>
      </section>

      <section id="impact" className="section section--light">
        <div className="container impact-grid">
          <div>
            <div className="eyebrow eyebrow--dark">05 — Impact</div>
            <h2 className="section-title section-title--dark">
              A talent platform is a jobs engine.
            </h2>
            <p className="section-body section-body--dark max-32ch">
              Every category we build employs far more people off the pitch than on it: scouts, coaches, creators, editors, league and event operators, physios, agents and administrators, and keeps that value in the communities that create it.
            </p>
          </div>
          <div className="targets">
            <div className="mini-label">Targets — next 3 years</div>
            {targetItems.map((item) => (
              <div className="target-row" key={item.value + item.text}>
                <div className="target-row__value">{item.value}</div>
                <div className="target-row__text">{item.text}</div>
              </div>
            ))}
            <div className="target-note">SDG 8 · SDG 10 · SDG 11 · SDG 4 · IRIS+ aligned KPIs</div>
          </div>
        </div>
      </section>

      <section id="traction" className="section section--light">
        <div className="container">
          <div className="eyebrow eyebrow--dark">06 — Where we are</div>
          <h2 className="section-title section-title--dark max-22ch">
            Built on the ground. Not on paper.
          </h2>

          <div className="traction-grid">
            <article className="traction-card">
              <div className="traction-card__image-wrap">
                <Image src="/assets/firecrackers.png" alt="Firecrackers FC squad in Talent 50 kit" width={720} height={450} className="traction-card__image" />
                <span className="badge">Operational</span>
              </div>
              <div className="traction-card__copy">
                <h3>Firecrackers FC</h3>
                <p>
                  A grassroots club in Nigeria, founded and operational since 2024, with an active youth scouting and development pipeline. It's our live proof-of-concept and first source of talent.
                </p>
              </div>
            </article>

            <article className="traction-card">
              <div className="traction-card__image-wrap">
                <Image src="/assets/boardgame.png" alt="A packed arena watching a giant draughts board game final" width={720} height={450} className="traction-card__image" />
                <span className="badge badge--translucent">New format</span>
              </div>
              <div className="traction-card__copy">
                <h3>Digital Board Game League</h3>
                <p>
                  A fresh take on a classic board game, reimagined for digital, competitive play across Africa. We're keeping the specifics under wraps for now.
                </p>
              </div>
            </article>
          </div>

          <div className="eyebrow eyebrow--dark eyebrow--inline">
            <span className="eyebrow__line" />
            &amp; others in build. More to share soon.
          </div>
        </div>
      </section>

      <section id="contact" className="section section--dark contact-section">
        <div className="container">
          <h2 className="section-title section-title--light max-16ch">
            Built here. Owned here.
          </h2>
          <p className="section-body section-body--light max-52ch">
            A movement that empowers communities, inspires youth, and showcases Africa's potential on the global stage.
          </p>
          <div className="contact-actions">
            <a href="mailto:hello@thetalent50company.com" className="btn btn--light">Let's talk</a>
            <a href="mailto:hello@thetalent50company.com" className="contact-link">hello@thetalent50company.com</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div className="footer-brand">
              <Image src="/assets/logo-white.png" alt="Talent 50" width={150} height={40} />
              <p>
                The Talent 50 Group. Building the missing middle of African sport through talent, media, distribution and capital.
              </p>
              <div className="footer-brand__kicker">Teams · Media · Tech</div>
            </div>
            <div className="footer-links">
              <div>
                <div className="mini-label">Explore</div>
                <a href="#about">What we do</a>
                <a href="#group">The group</a>
                <a href="#market">Market</a>
                <a href="#impact">Impact</a>
              </div>
              <div>
                <div className="mini-label">Contact</div>
                <a href="mailto:hello@thetalent50company.com">hello@thetalent50company.com</a>
                <a href="https://thetalent50company.com" target="_blank" rel="noopener noreferrer">thetalent50company.com</a>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© 2026 The Talent 50 Group — a sports ecosystem development company.</span>
            <span>Stephanie Etiaka · Founder</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
