const Arrow = () => <span aria-hidden="true">↗</span>;

const experiences = [
  {
    period: 'Nov 2025 — Present',
    role: 'Student Assistant, Quality and Usability Lab',
    org: 'Technische Universität Berlin',
    detail: 'Researching LLM-as-a-Judge methods for summary evaluation, including dataset curation, evaluation-prompt design, inference optimization, and model alignment.',
  },
  {
    period: 'Dec 2019 — Mar 2024',
    role: 'Full-Stack Developer',
    org: 'Freelance Software Engineer',
    detail: 'Built time-series inventory forecasting and personalized marketing automation, improving festival logistics planning by 25% and increasing order conversions.',
  },
  {
    period: 'Feb 2015 — Nov 2019',
    role: 'Software Engineer',
    org: 'Hi-Tech Bangla Ltd.',
    detail: 'Integrated OpenStreetMap and modeled 15+ radar-control scenarios while engineering CRM, inventory, and warehouse synchronization systems that reduced inventory congestion to 30%.',
  },
];

const skillGroups = [
  ['ML, AI & computer vision', 'PyTorch, Hugging Face Transformers, OpenCV, scikit-image, deep learning, NLP, generative AI'],
  ['LLM engineering', 'Qwen, Mistral, Gemma, RAG, LangChain, LangGraph, SFT, DPO, prompt engineering'],
  ['Backend development', 'Python, Java, Kotlin, TypeScript, Spring Boot, FastAPI, REST, microservices, Hibernate'],
  ['Data, MLOps & cloud', 'PostgreSQL, MongoDB, FAISS, Chroma, MLflow, W&B, Docker, Kubernetes, Terraform, AWS, GKE'],
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
          <p className="eyebrow"><span /> AI &amp; Backend Engineering</p>
          <h1>Building intelligent systems that work in the <em>real world.</em></h1>
          <p className="hero-intro">I’m Md. Tanbin Rahid Kyser, a software engineer with 4+ years of experience building scalable backend systems, enterprise applications, and AI-powered solutions.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="https://github.com/TanbinRKyser" target="_blank" rel="noreferrer">View GitHub <Arrow /></a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Current focus">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="focus-card"><p>Current focus</p><strong>LLM evaluation &amp; alignment</strong><span>Researching at TU Berlin’s Quality and Usability Lab</span></div>
          <div className="code-note" aria-hidden="true"><span>01</span><code>research → prototype → impact</code></div>
        </aside>
      </section>

      <section className="signal-strip" aria-label="Professional snapshot">
        <div><strong>4+</strong><span>Years of experience</span></div>
        <div><strong>AI + LLMs</strong><span>Research interest</span></div>
        <div><strong>Python + Java</strong><span>Core engineering skills</span></div>
        <div><strong>Cloud-native</strong><span>Backend systems focus</span></div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading"><p className="kicker">Selected work</p><h2>Research ideas, engineered into useful systems.</h2></div>

        <article className="featured-project project-row">
          <div className="project-number">01 / 03</div>
          <div className="project-copy">
            <div className="pill-row"><span>Natural language processing</span><span>2025</span></div>
            <h3>Multilingual Customer Support Bot</h3>
            <p>A context-aware multilingual RAG pipeline built with more than 5,000 Amazon QA pairs, achieving 76% QA accuracy over a TF-IDF retrieval baseline with LIME and Captum explainability.</p>
            <div className="tech-list" aria-label="Technologies"><span>PyTorch</span><span>FastAPI</span><span>LangChain</span><span>FAISS</span><span>mT5-base</span></div>
            <a className="text-link" href="https://github.com/TanbinRKyser/multilingual-customer-support" target="_blank" rel="noreferrer">View repository <Arrow /></a>
          </div>
          <div className="project-visual visual-support">
            <figure className="support-figure support-usage">
              <img src="/support-bot-usage.png" alt="Multilingual customer-support bot interface showing a German shipping question, a source-grounded answer, retrieval controls, confidence, and retrieved sources" />
              <figcaption>Multilingual input · source-grounded RAG response</figcaption>
            </figure>
            <figure className="support-figure support-explainability">
              <img src="/support-bot-explainability.png" alt="Explainability dashboard showing overall confidence, retrieval and answer-quality scores, and the top retrieved multilingual sources" />
              <figcaption>Confidence and retrieval explainability</figcaption>
            </figure>
            <div className="support-result"><strong>76%</strong><span>QA accuracy</span></div>
          </div>
        </article>

        <article className="project-row compact-project">
          <div className="project-number">02 / 03</div>
          <div className="project-copy">
            <div className="pill-row"><span>Computer vision</span><span>Research</span></div>
            <h3>Driver Facial Emotion Recognition System</h3>
            <p>A lightweight dual-branch ShuffleNet and EfficientViT architecture for ADAS facial emotion recognition, combining local facial features with global context and validated using Grad-CAM.</p>
            <div className="tech-list" aria-label="Technologies"><span>Python</span><span>PyTorch</span><span>OpenCV</span><span>EfficientViT</span><span>Grad-CAM</span></div>
          </div>
          <div className="project-visual visual-dfer">
            <figure className="dfer-figure dfer-matrix">
              <img src="/dfer-confusion-matrix.png" alt="Normalized confusion matrix for six driver emotion classes, showing near-perfect classification and 93 percent accuracy for anger" />
              <figcaption>Six-class normalized confusion matrix</figcaption>
            </figure>
            <div className="dfer-result"><strong>94%</strong><span>F1-score</span></div>
          </div>
        </article>

        <article className="project-row compact-project">
          <div className="project-number">03 / 03</div>
          <div className="project-copy">
            <div className="pill-row"><span>Distributed systems</span><span>Cloud</span></div>
            <h3>Currency Exchange Platform</h3>
            <p>A scalable microservices-based currency exchange platform supporting 10,000+ concurrent requests through Kubernetes horizontal scaling and zero-downtime deployments.</p>
            <div className="tech-list" aria-label="Technologies"><span>Spring Cloud</span><span>Docker</span><span>Kubernetes</span><span>GKE</span><span>Zipkin</span></div>
            <a className="text-link" href="https://github.com/TanbinRKyser/Currency-Exchange" target="_blank" rel="noreferrer">View repository <Arrow /></a>
          </div>
          <div className="project-visual visual-cloud" aria-hidden="true">
            <div className="service service-one">Exchange</div><div className="service service-two">Gateway</div><div className="service service-three">Conversion</div>
            <div className="cloud-stat"><strong>10K+</strong><span>concurrent requests</span></div>
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
            <article><span>Apr 2024 — Present · Grade 1.9</span><h3>M.Sc. Artificial Intelligence</h3><p>Brandenburg University of Technology, Cottbus, Germany</p><small>Ongoing · English C1 · German B1 · Bengali native</small></article>
            <article><span>Completed Nov 2015 · CGPA 3.41/4.00</span><h3>B.Sc. Computer Science &amp; Engineering</h3><p>Islamic University of Technology, Gazipur, Bangladesh</p><small>Publication: Community Recommendation Approach for Social Networking Sites based on Mining Rules (ICEEICT, 2015)</small></article>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <p className="kicker">Keep exploring</p>
          <h2>Curious by nature.<br /><em>Driven by impact.</em></h2>
          <p className="footer-note">I build scalable software and applied AI systems. When I am not coding, you can find me learning about new recipes or hiking in the mountains. </p>
          <a className="button footer-button" href="https://github.com/TanbinRKyser" target="_blank" rel="noreferrer">Explore my GitHub <Arrow /></a>
        </div>
        <div className="footer-bottom"><span>© 2026 Md. Tanbin Rahid Kyser</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
