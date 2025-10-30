import './About.css';

const About = () => {
  const team = [
    {
      name: 'Robert Brown',
      title: 'Founder & CEO',
      bio: 'The founder and CEO of Sens Operations, bringing years of leadership and innovation in electrical engineering to the team. With a proven track record of building successful solutions, Rob is dedicated to driving technology that solves real-world challenges with precision and impact.',
    },
    {
      name: 'Jake Berryman',
      title: 'Founder & CSO',
      bio: 'A dynamic entrepreneur, visionary leader, and proud military veteran with expertise in sales and leadership. Jake has a proven history of transforming innovative ideas into thriving enterprises, having launched multiple groundbreaking technologies and building strong partnerships across industries.',
    },
    {
      name: 'Kaleb Hundersmarck',
      title: 'Founder & CPO',
      bio: 'An accomplished software engineer with a strong background in developing advanced tools for a range of industries. Skilled in modern technologies and experienced in leading engineering teams, he brings innovation and adaptability to every project.',
    },
    {
      name: 'Conor Souhrada',
      title: 'Founder & CTO',
      bio: 'A skilled software engineer with a focus on leadership and system architecture, having successfully led engineering teams to build scalable, high-performance platforms. His expertise in implementing robust solutions has driven innovation and growth across multiple industries.',
    },
    {
      name: 'Katie Nibbi',
      title: 'Founder & Legal',
      bio: 'A strategic legal expert specializing in intellectual property, regulatory compliance, and contract strategy. Katie ensures that Sens Operations\' innovations are protected and positioned for successful commercialization, bringing a keen understanding of the legal landscape essential for agricultural technology ventures.',
    },
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="fade-in-up">About Sens Operations</h1>
          <p className="about-hero-text fade-in-up">
            Pioneering the future of agricultural technology through innovation,
            expertise, and a commitment to sustainability.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                To revolutionize agriculture through proprietary sensor technology and machine
                learning that predicts food spoilage before it happens. By enabling true zero-loss
                storage management, we empower farmers and agricultural businesses to eliminate
                waste, maximize efficiency, and build a more sustainable future for global food
                systems.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Modern agricultural technology"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-dark values-section">
        <div className="container">
          <h2 className="text-center">Our Approach</h2>
          <div className="grid grid-2 values-grid">
            <div className="value-item">
              <h3>Innovation-Driven</h3>
              <p>
                We leverage cutting-edge sensor technology and data analytics to provide
                solutions that were previously impossible in agricultural storage management.
              </p>
            </div>
            <div className="value-item">
              <h3>Farmer-Focused</h3>
              <p>
                Our technology is designed with the end-user in mind, creating intuitive
                interfaces that make complex data accessible and actionable.
              </p>
            </div>
            <div className="value-item">
              <h3>Sustainability First</h3>
              <p>
                By preventing waste and optimizing storage conditions, we help reduce the
                environmental impact of agricultural operations.
              </p>
            </div>
            <div className="value-item">
              <h3>Expert Partnerships</h3>
              <p>
                We collaborate with PhD agriculturalists and leading agricultural businesses
                to ensure our AI solutions meet real-world needs and deliver measurable results
                backed by scientific expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="text-center">Meet the Team</h2>
          <p className="team-intro text-center">
            Our founding team brings together decades of experience in technology,
            leadership, and innovation.
          </p>
          <div className="grid grid-2 team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-avatar">
                  <div className="avatar-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="section partnerships-highlight">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Agricultural research and development"
                loading="lazy"
              />
            </div>
            <div className="about-text">
              <h2>Strategic Partnerships in R&D</h2>
              <p>
                Our development is guided by strategic partnerships with PhD agriculturalists who
                bring decades of scientific expertise in crop storage, post-harvest management,
                and agricultural systems. This collaboration ensures our AI and machine learning
                models are grounded in proven agricultural science.
              </p>
              <p>
                By combining cutting-edge technology with deep domain expertise, we create
                solutions that address real agricultural challenges with precision and efficacy.
                Our research partnerships drive continuous innovation in predictive algorithms
                and sensor technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Transform Your Storage Operations?</h2>
          <p className="cta-text">
            Let's discuss how Sens Operations can help your agricultural business
            reduce waste and optimize efficiency.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
