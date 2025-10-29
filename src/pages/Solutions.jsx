import './Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="container">
          <h1 className="fade-in-up">Predictive Storage Solutions</h1>
          <p className="solutions-hero-text fade-in-up">
            Machine learning-powered predictions prevent spoilage before it starts, enabling
            true zero-loss storage management for agricultural operations.
          </p>
        </div>
      </section>

      {/* Potato Storage Section */}
      <section className="section potato-section">
        <div className="container">
          <div className="solution-content">
            <div className="solution-text">
              <h2>Predictive Potato Storage</h2>
              <p>
                Our flagship solution transforms potato storage through proprietary sensors that
                feed machine learning models. By collecting comprehensive data from every deployment,
                our system learns to predict spoilage before it happens—enabling operators to
                intervene and prevent loss entirely.
              </p>
              <p>
                Working with leading food processors, every storage facility we deploy makes our
                predictions more accurate. The data collected continuously refines our models,
                creating an increasingly intelligent system that anticipates problems and recommends
                preventive actions before any product is compromised.
              </p>
            </div>
            <div className="solution-image">
              <div className="image-placeholder">
                <span>Potato Storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-dark benefits-section">
        <div className="container">
          <h2 className="text-center">Solution Benefits</h2>
          <div className="grid grid-3 benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📉</div>
              <h3>Eliminate Loss</h3>
              <p>
                Predict spoilage before it happens and intervene proactively, achieving
                true zero-loss storage operations.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Lower Costs</h3>
              <p>
                Optimize energy usage and reduce spoilage-related losses through
                data-driven storage management.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Improve Quality</h3>
              <p>
                Maintain optimal conditions throughout storage to ensure product quality
                and marketability.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Increase Efficiency</h3>
              <p>
                Automated monitoring reduces manual inspection needs while improving
                oversight.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Enhance Sustainability</h3>
              <p>
                Reduce environmental impact by preventing waste and optimizing resource
                usage.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤖</div>
              <h3>Smarter Over Time</h3>
              <p>
                Machine learning models continuously improve with each deployment,
                delivering increasingly accurate predictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="text-center">Platform Features</h2>
          <div className="features-content">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div className="feature-details">
                <h3>Proprietary Sensor Suite</h3>
                <p>
                  Exclusive sensors capture environmental and chemical data with unprecedented
                  detail, feeding our machine learning models with the comprehensive information
                  needed for accurate predictions.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <div className="feature-details">
                <h3>Predictive Analytics</h3>
                <p>
                  Machine learning models analyze sensor data to predict spoilage events before
                  they occur, enabling preventive intervention rather than reactive response.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <div className="feature-details">
                <h3>Pre-Emptive Alerts</h3>
                <p>
                  Receive notifications before spoilage begins, not after. Our predictions
                  give you time to adjust conditions and prevent loss entirely.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <div className="feature-details">
                <h3>Continuous Learning</h3>
                <p>
                  Each deployment improves our models. The more data we collect, the more
                  accurate our predictions become, creating a smarter system over time.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">05</div>
              <div className="feature-details">
                <h3>Zero-Loss Management</h3>
                <p>
                  By predicting problems before they occur and recommending preventive actions,
                  our platform enables true zero-loss storage operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section partnership-section">
        <div className="container">
          <div className="partnership-content">
            <div className="partnership-image">
              <div className="image-placeholder">
                <span>Industry Partnership</span>
              </div>
            </div>
            <div className="partnership-text">
              <h2>Strategic Partnerships</h2>
              <p>
                We work closely with leading agricultural businesses to develop and refine
                our solutions. Our partnership approach ensures that our technology meets
                real-world operational needs and delivers measurable results.
              </p>
              <p>
                Currently deployed in commercial potato storage operations, our platform
                has demonstrated significant improvements in waste reduction and quality
                maintenance.
              </p>
              <ul className="partnership-benefits">
                <li>Collaborative development approach</li>
                <li>Customized solutions for specific needs</li>
                <li>Ongoing support and optimization</li>
                <li>Proven results in commercial operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Transform Your Storage Operations</h2>
          <p className="cta-text">
            Discover how Sens Operations can help you reduce waste, improve quality,
            and optimize efficiency in your agricultural storage facilities.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
