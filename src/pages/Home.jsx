import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title fade-in-up">
            AI-Powered Agricultural Intelligence
          </h1>
          <p className="hero-subtitle fade-in-up">
            Adaptive machine learning predicts food spoilage before it happens. Our AI-driven
            sensors enable zero-loss storage management through continuous learning.
          </p>
          <div className="hero-cta fade-in-up">
            <Link to="/technology" className="btn btn-secondary">
              Explore Technology
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for hero image - will be replaced with actual image */}
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p className="mission-text">
            To revolutionize agriculture through proprietary AI-powered sensors and adaptive
            machine learning that predicts food spoilage before it happens. By enabling true
            zero-loss storage management with intelligent, self-learning systems, we empower
            farmers and agricultural businesses to eliminate waste, maximize efficiency, and
            build a more sustainable future for global food systems.
          </p>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section section-dark value-section">
        <div className="container">
          <h2 className="text-center">Our Place in the Market</h2>
          <div className="grid grid-4 value-grid">
            <div className="value-card">
              <div className="value-icon">🌾</div>
              <h3>Servicing Agriculture</h3>
              <p>
                Providing cutting-edge solutions that optimize crop storage, detect diseases
                early, and reduce post-harvest losses.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Simplifying Technology</h3>
              <p>
                Creating intuitive solutions that bridge the gap between complex agricultural
                challenges and user-friendly tools.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤖</div>
              <h3>Adaptive AI Technology</h3>
              <p>
                Our proprietary sensors feed adaptive machine learning models that continuously
                evolve, predicting spoilage with increasing accuracy through AI-powered analysis.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">📦</div>
              <h3>Innovating Food Storage</h3>
              <p>
                Combining advanced technology with practical solutions to optimize environmental
                conditions and extend produce shelf life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="section solutions-preview">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2>AI-Driven Predictive Storage Intelligence</h2>
              <p>
                Our proprietary sensor platform collects critical environmental and chemical data
                that feeds adaptive AI models. Through continuous machine learning from real-world
                storage conditions, our intelligent system predicts food spoilage before it happens—enabling
                proactive intervention and zero-loss management.
              </p>
              <ul className="features-list">
                <li>AI-powered multi-sensor data collection and analysis</li>
                <li>Adaptive machine learning with continuous improvement</li>
                <li>Pre-emptive AI predictions and intelligent alerts</li>
                <li>Self-optimizing models that learn from every deployment</li>
              </ul>
              <Link to="/solutions" className="btn btn-primary">
                Explore Solutions
              </Link>
            </div>
            <div className="solutions-image">
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80"
                alt="Potato storage facility"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Join Us in Defining the Future of Food Storage</h2>
          <p className="cta-text">
            Ready to optimize your storage operations and reduce waste?
            Let's discuss how Sens Operations can transform your agricultural business.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
