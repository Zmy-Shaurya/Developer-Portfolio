import './Navigation.css'

function Navigation({ activeSection, scrollToSection }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Shaurya Pratap Singh</span>
        </div>
        <div className="nav-menu">
          <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
