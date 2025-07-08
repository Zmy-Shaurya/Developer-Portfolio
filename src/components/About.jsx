import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Started coding a few years ago and somehow ended up here. Love building 
              React apps and Python scripts, though I probably spend more time debugging 
              than I'd like to admit.
            </p>
            <p>
              Currently a student but spend most of my time on side projects. My latest 
              obsession is this React based drum machine - because who doesn't 
              want to have a little fun while coding, right?
            </p>
            <p>
              When I'm not staring at VS Code, I'm probably exploring new tech or 
              creating art but on a canvas instead of my VS code workspace.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>15+</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Coding</p>
            </div>
            <div className="stat">
              <h3>∞</h3>
              <p>Bugs Fixed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
