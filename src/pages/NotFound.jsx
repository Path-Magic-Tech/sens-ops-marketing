import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <section className="not-found-hero">
        <div className="container">
          <h1 className="fade-in-up">404</h1>
          <p className="not-found-text fade-in-up">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-light">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
