import './Hero.css'

function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hey, I'm <span className="highlight">Shaurya</span></h1>
        <h2 className="hero-subtitle">I build stuff with React & Python</h2>
        <p className="hero-description">
          19-year-old from India who codes way too much. Currently obsessed with React 
          and building random projects that somehow always end up more complex than planned.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('projects')}>
            Check out my work
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
            Let's talk
          </button>
          <a href="/shaurya-resume.pdf" download className="btn-outline">
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
