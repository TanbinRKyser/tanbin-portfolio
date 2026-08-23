const Arrow = () => <span aria-hidden="true">↗</span>;

const experiences = [
  {
    period: 'Nov 2025 — Present',
    role: 'Student Assistant',
    org: 'Technical University of Berlin',
    detail: 'Researching small language-model-based automated evaluation techniques for summarization.',
  },
  {
    period: 'Oct 2025 — Present',
    role: "Master’s Thesis Researcher",
    org: 'Brandenburg University of Technology',
    detail: 'Developing Markov agent-based automated parameter selection for particle tracking in microgravity experiments.',
  },
  {
    period: 'Dec 2019 — Jan 2024',
    role: 'Full-Stack Web Developer',
    org: 'Self-employed',
    detail: 'Built performant web platforms with Spring, React, Next.js, Kafka, and AWS—improving support outcomes and application speed.',
  },
  {
    period: 'Feb 2015 — Nov 2019',
    role: 'Software Engineer',
    org: 'HTB',
    detail: 'Delivered enterprise systems spanning radar-control simulation, CRM automation, and a high-availability power-plant database.',
  },
];

const skillGroups = [
  ['AI & computer vision', 'PyTorch, Transformers, OpenCV, scikit-learn, LangChain, NumPy, Pandas'],
  ['Software engineering', 'Python, Java 11, TypeScript, SQL, Bash, Spring Boot, React, Next.js'],
  ['Data & infrastructure', 'PostgreSQL, MongoDB, Oracle, Chroma, AWS, GKE, Docker, Kubernetes, Terraform'],
  ['Quality & delivery', 'MLflow, W&B, Jenkins, Git, JUnit, Mockito, Jest, Selenium, TDD, Agile'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tanbin Kyser, home">TK<span className="accent-dot">.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a>
        </nav>
        <a className="header-link" href="https://github.com/TanbinRKyser" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> AI researcher &amp; software engineer</p>
          <h1>Building intelligent systems that work in the <em>real world.</em></h1>
          <p className="hero-intro">I’m Md. Tanbin Rahid Kyser, a computer scientist working across machine learning, computer vision, and full-stack engineering.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="https://github.com/TanbinRKyser" target="_blank" rel="noreferrer">View GitHub <Arrow /></a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Current focus">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="focus-card"><p>Current focus</p><strong>LLM evaluation &amp; particle tracking</strong><span>Researching at TU Berlin and BTU Cottbus</span></div>
          <div className="code-note" aria-hidden="true"><span>01</span><code>research → prototype → impact</code></div>
        </aside>
      </section>

      <section className="signal-strip" aria-label="Professional highlights">
        <div><strong>9+</strong><span>Years in software</span></div>
        <div><strong>5+</strong><span>Enterprise applications</span></div>
        <div><strong>99.9%</strong><span>Production uptime delivered</span></div>
        <div><strong>AI + Web</strong><span>End-to-end perspective</span></div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading"><p className="kicker">Selected work</p><h2>Research ideas, engineered into useful systems.</h2></div>

        <article className="featured-project project-row">
          <div className="project-number">01 / 03</div>
          <div className="project-copy">
            <div className="pill-row"><span>Natural language processing</span><span>2025</span></div>
            <h3>Multilingual Customer Support Bot</h3>
            <p>A context-aware support assistant combining fine-tuned T5-Flan, retrieval-augmented generation, and a local knowledge base—76% more accurate than a TF-IDF baseline.</p>
            <div className="tech-list" aria-label="Technologies"><span>PyTorch</span><span>FastAPI</span><span>LangChain</span><span>Angular</span><span>ChromaDB</span></div>
            <a className="text-link" href="https://github.com/TanbinRKyser/multilingual-customer-support" target="_blank" rel="noreferrer">View repository <Arrow /></a>
          </div>
          <div className="project-visual visual-language" aria-hidden="true">
            <div className="dialog dialog-one"><span>EN</span>Hello—how can I help?</div>
            <div className="dialog dialog-two"><span>DE</span>Wie kann ich helfen?</div>
            <div className="dialog dialog-three"><span>BN</span>আমি কীভাবে সাহায্য করতে পারি?</div>
            <div className="accuracy"><strong>+76%</strong><span>accuracy</span></div>
          </div>
        </article>

        <article className="project-row compact-project">
          <div className="project-number">02 / 03</div>
          <div className="project-copy">
            <div className="pill-row"><span>Computer vision</span><span>Research</span></div>
            <h3>Particle Tracking in Dynamic Environments</h3>
            <p>A stereo-image tracking pipeline for microscopic particles using classical image processing, YOLO, Hungarian association, Kalman filtering, TrackMate, and ByteTrack.</p>
            <div className="tech-list" aria-label="Technologies"><span>PyTorch</span><span>YOLO</span><span>ByteTrack</span><span>scikit-image</span></div>
          </div>
          <div className="project-visual visual-particles" aria-hidden="true">
            <span className="particle p1" /><span className="particle p2" /><span className="particle p3" /><span className="particle p4" />
            <div className="track t1" /><div className="track t2" /><div className="track t3" />
            <div className="visual-label">detect · associate · track</div>
          </div>
        </article>

        <article className="project-row compact-project">
          <div className="project-number">03 / 03</div>
          <div className="project-copy">
            <div className="pill-row"><span>Distributed systems</span><span>Cloud</span></div>
            <h3>Currency Exchange Platform</h3>
            <p>A three-service platform designed for more than 1,000 API calls per second, with resilient service discovery, observability, and container orchestration.</p>
            <div className="tech-list" aria-label="Technologies"><span>Spring Cloud</span><span>Docker</span><span>Kubernetes</span><span>GKE</span><span>Zipkin</span></div>
            <a className="text-link" href="https://github.com/TanbinRKyser/Currency-Exchange" target="_blank" rel="noreferrer">View repository <Arrow /></a>
          </div>
          <div className="project-visual visual-cloud" aria-hidden="true">
            <div className="service service-one">Exchange</div><div className="service service-two">Gateway</div><div className="service service-three">Conversion</div>
            <div className="cloud-stat"><strong>1K+</strong><span>requests / sec</span></div>
          </div>
        </article>
      </section>

      <section className="experience-wrap" id="experience">
        <div className="section experience-section">
          <div className="section-heading light"><p className="kicker">Experience</p><h2>From enterprise software to applied AI research.</h2></div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-row" key={item.role}>
                <div className="timeline-index">0{index + 1}</div><div className="timeline-period">{item.period}</div>
                <div className="timeline-role"><h3>{item.role}</h3><p>{item.org}</p></div><p className="timeline-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilities-section" id="about">
        <div className="section-heading"><p className="kicker">Capabilities</p><h2>Technical depth across the complete product stack.</h2></div>
        <div className="skill-grid">
          {skillGroups.map(([title, detail], index) => (
            <article className="skill-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="section">
          <div className="section-heading"><p className="kicker">Education</p><h2>Where rigorous study meets practical curiosity.</h2></div>
          <div className="education-grid">
            <article><span>2024 — 2027, expected</span><h3>M.Sc. Artificial Intelligence</h3><p>Brandenburg University of Technology, Cottbus, Germany</p><small>Explainable ML · ML at scale · Image processing · Computer vision</small></article>
            <article><span>Bachelor’s degree</span><h3>B.Sc. Computer Science &amp; Engineering</h3><p>Islamic University of Technology, Gazipur, Bangladesh</p><small>Thesis: A QoS-aware Resource Allocation Method for Cloud Computing</small></article>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <p className="kicker">Keep exploring</p>
          <h2>Curious by nature.<br /><em>Driven by impact.</em></h2>
          <p className="footer-note">When I’m away from a model or codebase, you’ll likely find me hiking, taking photographs, or learning through a new course.</p>
          <a className="button footer-button" href="https://github.com/TanbinRKyser" target="_blank" rel="noreferrer">Explore my GitHub <Arrow /></a>
        </div>
        <div className="footer-bottom"><span>© 2026 Md. Tanbin Rahid Kyser</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
