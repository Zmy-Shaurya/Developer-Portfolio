import './Hero.css'
import Aurora from './Aurora'

function Hero({ scrollToSection }) {
return (
    <section id="home" className="hero">
        <Aurora />
        <div className="hero-content">
            <h1 className="hero-title">Hey, I'm <span className="highlight">Shaurya</span></h1>
            <h2 className="hero-subtitle">I make cool stuff on my laptop</h2>
            <p className="hero-description">
                I'm just a 19 year-old developer from India, who codes way too much. I love creating things that live on the binary, whether it be full fletched websites, or small python scripts to automate my daily tasks. 
            </p>
            <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                    Check out my work
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                    Let's talk
                </button>
                <a href="/shaurya-resume.pdf" download="shaurya-resume.pdf" className="btn-outline">
                    Resume
                </a>
            </div>
        </div>
    </section>
)
}

export default Hero
