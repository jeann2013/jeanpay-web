import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">JeanPay</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main className="main">
        <section className="hero">
          <h1>Welcome to JeanPay</h1>
          <p className="subtitle">Fast, secure, and reliable payment solutions</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🔒 Secure</h3>
              <p>Bank-level security for all your transactions</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Fast</h3>
              <p>Lightning-fast payment processing</p>
            </div>
            <div className="feature-card">
              <h3>🌍 Global</h3>
              <p>Accept payments from anywhere in the world</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 JeanPay. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
