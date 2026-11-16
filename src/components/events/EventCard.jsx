import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
export default function EventCard({ event, wide = false }) {
  return (
    <article className={`event-card ${wide ? 'event-card--wide' : ''}`}>
      <Link className="event-card__image" to={`/events/${event.slug}`}>
        <img src={event.image} alt="" />
        <Badge>{event.category}</Badge>
      </Link>
      <div className="event-card__body">
        <div className="date-box">
          <b>{event.date.split(' ')[0]}</b>
          <span>{event.date.split(' ').slice(1).join(' ')}</span>
        </div>
        <div>
          <p className="event-card__host">{event.host}</p>
          <h3>
            <Link to={`/events/${event.slug}`}>{event.title}</Link>
          </h3>
          <p className="event-card__place">
            <MapPin size={15} />
            {event.city} · {event.venue}
          </p>
          <div className="event-card__foot">
            <strong>{event.price ? `From $${event.price}` : 'Free'}</strong>
            <Link to={`/events/${event.slug}`} aria-label="View event">
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
