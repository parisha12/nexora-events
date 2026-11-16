import { Navigate, useParams } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Share2,
  Bookmark,
  Check,
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { useEvents } from '../context/EventContext';
export default function EventDetail() {
  const { slug } = useParams(),
    { events } = useEvents(),
    e = events.find((event) => event.slug === slug);
  if (!e) return <Navigate to="/events" />;
  return (
    <>
      <section className="event-hero">
        <Container>
          <div className="event-hero__image">
            <img src={e.image} alt="" />
            <Badge>{e.category}</Badge>
          </div>
          <div className="event-hero__copy">
            <span className="eyebrow">{e.host}</span>
            <h1>{e.title}</h1>
            <p>{e.description}</p>
            <div className="event-meta">
              <span>
                <Calendar />
                {e.date}, {e.year}
              </span>
              <span>
                <Clock />
                {e.time}
              </span>
              <span>
                <MapPin />
                {e.venue}, {e.city}
              </span>
              <span>
                <Users />
                {e.attendees.toLocaleString()} attending
              </span>
            </div>
            <div className="event-actions">
              <Button to={`/checkout/${e.slug}`}>Get tickets</Button>
              <button className="icon-button">
                <Bookmark />
              </button>
              <button className="icon-button">
                <Share2 />
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="event-content">
          <article>
            <span className="eyebrow">ABOUT THE EVENT</span>
            <h2>The conversations shaping tomorrow, happening today.</h2>
            <p>
              {e.description} Meet senior operators, emerging voices and
              practical thinkers in a format designed for depth—not noise.
            </p>
            <h3>What you’ll walk away with</h3>
            <ul className="benefits">
              <li>
                <Check />
                Frameworks you can put to work immediately
              </li>
              <li>
                <Check />
                Honest conversations with experienced leaders
              </li>
              <li>
                <Check />
                Curated introductions to people worth knowing
              </li>
              <li>
                <Check />
                Session recordings and a practical resource pack
              </li>
            </ul>
            <h3>Featured themes</h3>
            <div className="tag-row">
              {e.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
          <aside className="ticket-panel">
            <span>Tickets from</span>
            <b>${e.price}</b>
            <p>General access · Full program · Networking lounge</p>
            <Button to={`/checkout/${e.slug}`}>Choose tickets</Button>
            <small>Secure checkout · Instant confirmation</small>
          </aside>
        </Container>
      </section>
    </>
  );
}
