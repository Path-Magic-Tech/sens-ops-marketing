import './Technology.css';

const Technology = () => {
  return (
    <div className="technology">
      {/* Hero Section */}
      <section className="tech-hero">
        <div className="container">
          <h1 className="fade-in-up">Predictive Intelligence Through Proprietary Sensors</h1>
          <p className="tech-hero-text fade-in-up">
            Our proprietary sensor suite collects comprehensive data that powers machine learning
            models to predict food spoilage before it happens, eliminating loss.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section">
        <div className="container">
          <div className="tech-content">
            <div className="tech-text">
              <h2>From Data Collection to Prediction</h2>
              <p>
                Our proprietary sensor technology captures a comprehensive range of environmental
                and chemical indicators that traditional systems miss. This rich dataset continuously
                feeds our machine learning models, training them to recognize the subtle patterns
                that precede spoilage.
              </p>
              <p>
                As our system collects more data from real-world deployments, our predictive
                models become increasingly accurate—learning to forecast spoilage events before
                they occur. This allows operators to intervene early, adjust storage conditions,
                and prevent loss entirely rather than simply detecting problems after they've begun.
              </p>
            </div>
            <div className="tech-image">
              <div className="image-placeholder">
                <span>Sensor Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section section-dark capabilities-section">
        <div className="container">
          <h2 className="text-center">Platform Capabilities</h2>
          <div className="grid grid-3 capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">🌡️</div>
              <h3>Environmental Monitoring</h3>
              <p>
                Continuous tracking of temperature, humidity, and atmospheric conditions
                to maintain optimal storage environments.
              </p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🔬</div>
              <h3>Proprietary Sensors</h3>
              <p>
                Our exclusive sensor suite captures environmental and chemical data that
                feeds our learning models with unprecedented detail.
              </p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🤖</div>
              <h3>Machine Learning</h3>
              <p>
                Predictive models continuously learn from field data to forecast spoilage
                before it happens, enabling zero-loss intervention.
              </p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🔔</div>
              <h3>Real-Time Alerts</h3>
              <p>
                Instant notifications when conditions deviate from optimal ranges,
                enabling rapid response.
              </p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">📱</div>
              <h3>Remote Monitoring</h3>
              <p>
                Access critical data and insights from anywhere through our intuitive
                dashboard interface.
              </p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🎯</div>
              <h3>Predictive Recommendations</h3>
              <p>
                AI-powered insights that anticipate problems and recommend preventive
                actions before spoilage occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Detection Section */}
      <section className="section disease-section">
        <div className="container">
          <h2 className="text-center">Predicting Spoilage Before It Happens</h2>
          <p className="section-intro text-center">
            Our proprietary sensor data continuously trains machine learning models to recognize
            pre-spoilage patterns, enabling intervention before any loss occurs.
          </p>
          <div className="disease-content">
            <div className="disease-image">
              <div className="image-placeholder">
                <span>Predictive Analytics</span>
              </div>
            </div>
            <div className="disease-text">
              <h3>Zero-Loss Prevention</h3>
              <p>
                Unlike traditional systems that detect problems after they've started, our ML-powered
                platform learns to predict spoilage events before they occur. Each deployment adds
                to our training data, making predictions more accurate over time and allowing
                operators to prevent loss entirely through early intervention.
              </p>
              <ul className="features-list">
                <li>Proprietary sensor suite for comprehensive data collection</li>
                <li>Machine learning models that improve with every deployment</li>
                <li>Pre-spoilage pattern recognition and prediction</li>
                <li>Proactive intervention recommendations</li>
                <li>Continuous model refinement from real-world data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section section-dark integration-section">
        <div className="container text-center">
          <h2>Seamless Integration</h2>
          <p className="integration-text">
            Our technology is designed to integrate smoothly into existing agricultural
            operations, with minimal disruption and maximum impact. We work closely with
            your team to ensure successful deployment and ongoing optimization.
          </p>
          <div className="integration-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Assessment</h4>
              <p>We evaluate your storage facilities and operational needs</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Deployment</h4>
              <p>Strategic placement of sensors for comprehensive coverage</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Monitoring</h4>
              <p>Continuous data collection and analysis begins immediately</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Optimization</h4>
              <p>Ongoing refinement based on real-world performance data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Experience the Future of Agricultural Storage</h2>
          <p className="cta-text">
            Discover how our sensor technology can transform your storage operations.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Request a Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default Technology;
