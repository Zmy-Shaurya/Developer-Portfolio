import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Want to work together?</h3>
            <p>
              Always down for interesting projects or just chatting about tech. 
              Drop me a message or find me on these platforms.
            </p>
            <div className="contact-methods">
              <a href="mailto:parthsinghshaurya@gmail.com" className="contact-method">
                <span className="contact-icon">📧</span>
                Email me
              </a>
              <a href="https://linkedin.com/in/zmy-shaurya" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
              <a href="https://github.com/Zmy-Shaurya" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="contact-icon">🐙</span>
                GitHub
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="What's on your mind?" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
