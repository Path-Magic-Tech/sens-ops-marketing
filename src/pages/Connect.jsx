import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Connect.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdawavnb';

const Connect = () => {
  const [selectedPathway, setSelectedPathway] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const basePath = import.meta.env.BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const payload = selectedPathway === 'follower'
      ? { pathway: 'follower', name: formData.name, email: formData.email }
      : { pathway: 'investor_partner', ...formData };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', role: '', notes: '' });
    setSelectedPathway(null);
    setSubmitted(false);
    setError(false);
  };

  return (
    <div className="connect">
      {/* Hero */}
      <section className="connect-hero">
        <div className="container">
          <img
            src={`${basePath}logo-primary.svg`}
            alt="Sens Operations"
            className="connect-logo"
          />
          <p className="connect-event">World Agri-Tech 2026 &middot; San Francisco</p>
          <h1 className="fade-in-up">Thanks for connecting with us.</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {submitted ? (
            <div className="connect-success fade-in-up">
              <div className="success-icon">&#10003;</div>
              <h2>You're Connected!</h2>
              <p>
                {selectedPathway === 'follower'
                  ? "We'll keep you in the loop as we grow."
                  : "We'll be in touch soon to continue the conversation."}
              </p>
              <button className="connect-reset" onClick={handleReset}>
                Submit another response
              </button>
              <br />
              <Link to="/" className="connect-home-link">
                Learn more about SensOps &rarr;
              </Link>
            </div>
          ) : (
            <>
              {/* Pathway Selection */}
              <div className="connect-pathways grid grid-2">
                <div
                  className={`card pathway-card${selectedPathway === 'follower' ? ' selected' : ''}${selectedPathway && selectedPathway !== 'follower' ? ' dimmed' : ''}`}
                  onClick={() => setSelectedPathway('follower')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedPathway('follower')}
                >
                  <div className="pathway-icon">&#127793;</div>
                  <h3>Follow the Journey</h3>
                  <p>Get updates on our progress and product launches.</p>
                </div>

                <div
                  className={`card pathway-card${selectedPathway === 'investor_partner' ? ' selected' : ''}${selectedPathway && selectedPathway !== 'investor_partner' ? ' dimmed' : ''}`}
                  onClick={() => setSelectedPathway('investor_partner')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedPathway('investor_partner')}
                >
                  <div className="pathway-icon">&#129309;</div>
                  <h3>Investors &amp; Partnerships</h3>
                  <p>Start a conversation about partnership or investment.</p>
                </div>
              </div>

              {/* Form */}
              {selectedPathway && (
                <div className="connect-form-wrapper fade-in-up">
                  <form className="connect-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="connect-name">Name *</label>
                      <input
                        type="text"
                        id="connect-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoFocus
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="connect-email">Email *</label>
                      <input
                        type="email"
                        id="connect-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {selectedPathway === 'investor_partner' && (
                      <>
                        <div className="form-group">
                          <label htmlFor="connect-company">Company *</label>
                          <input
                            type="text"
                            id="connect-company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="connect-role">Role / Title *</label>
                          <input
                            type="text"
                            id="connect-role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="connect-notes">What would you like to discuss? (optional)</label>
                          <textarea
                            id="connect-notes"
                            name="notes"
                            rows="3"
                            value={formData.notes}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </>
                    )}

                    {error && (
                      <div className="connect-error">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary btn-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? 'Submitting...'
                        : selectedPathway === 'follower'
                          ? 'Stay Connected'
                          : 'Start the Conversation'}
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Connect;
