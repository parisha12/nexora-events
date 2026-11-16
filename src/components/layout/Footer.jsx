import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo />
          <p>
            Business events designed to move ideas, people and industries
            forward.
          </p>
        </div>
        <div>
          <b>Explore</b>
          <Link to="/events">Discover events</Link>
          <Link to="/tickets">My tickets</Link>
          <Link to="/organizer">Organizer studio</Link>
        </div>
        <div>
          <b>Company</b>
          <a>About Nexora</a>
          <a>Partner with us</a>
          <a>Help center</a>
        </div>
        <div>
          <b>Get event signals</b>
          <p>One concise email. The best events. Every Thursday.</p>
          <div className="subscribe">
            <input placeholder="Email address" />
            <button>→</button>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Nexora Events</span>
        <span>Privacy · Terms · Accessibility</span>
      </div>
    </footer>
  );
}
