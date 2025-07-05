import './Skills.css'

function Skills() {
  const skills = {
    "Frontend": ["React", "JavaScript", "HTML", "CSS"],
    "Backend": ["Python", "C Programming"],
    "Tools": ["Git", "GitHub", "VS Code"],
    "Learning": ["Node.js", "Advanced React"]
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">What I Work With</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-list">
                {skillList.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
