import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "React Drum Machine",
      description: "Interactive drum machine with React. Pretty fun to make beats with!",
      technologies: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/Zmy-Shaurya/React-Drum-Machine",
      live: "https://zmy-shaurya.github.io/React-Drum-Machine"
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Track your expenses because budgeting is important (learned the hard way).",
      technologies: ["React", "JavaScript", "Local Storage"],
      github: "https://github.com/Zmy-Shaurya/React-Expense-Tracker",
      live: "https://zmy-shaurya.github.io/React-Expense-Tracker"
    },
    {
      id: 3,
      title: "Pomodoro Timer",
      description: "A timer app for productivity. I use it when I actually remember to.",
      technologies: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/Zmy-Shaurya/React-Pomodoro-Timer",
      live: "https://zmy-shaurya.github.io/React-Pomodoro-Timer"
    },
    {
      id: 4,
      title: "Count To Target Game",
      description: "Number puzzle game. Harder than it looks, trust me.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Zmy-Shaurya/Count-To-Target",
      live: "https://zmy-shaurya.github.io/Count-To-Target"
    },
    {
      id: 5,
      title: "LevelUp - Habit Tracker",
      description: "RPG-style habit tracker inspired by Solo Leveling. Because everything's better with XP points.",
      technologies: ["Python", "CLI"],
      github: "https://github.com/Zmy-Shaurya/levelup",
      live: "#"
    },
    {
      id: 6,
      title: "Todo List",
      description: "Yet another todo app. But hey, it works and looks decent.",
      technologies: ["React", "JavaScript", "Local Storage"],
      github: "https://github.com/Zmy-Shaurya/React-Todo-List",
      live: "https://zmy-shaurya.github.io/React-Todo-List"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  Code
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
