import { Ticket, Calendar, MapPin, QrCode } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useEvents } from '../context/EventContext';
export default function MyTickets() {
  const { tickets } = useEvents();
  return (
    <section className="section page">
      <Container>
        <div className="ticket-page-title">
          <span className="eyebrow">MY NEXORA</span>
          <h1>Your tickets.</h1>
          <p>Everything you need for the rooms you’re joining.</p>
        </div>
        {tickets.length ? (
          <div className="ticket-list">
            {tickets.map((t, i) => (
              <article className="digital-ticket" key={i}>
                <img src={t.event.image} />
                <div>
                  <span className="eyebrow">{t.event.category}</span>
                  <h2>{t.event.title}</h2>
                  <p>
                    <Calendar /> {t.event.date}, {t.event.year}
                  </p>
                  <p>
                    <MapPin /> {t.event.venue}, {t.event.city}
                  </p>
                  <b>
                    {t.qty} ticket{t.qty > 1 ? 's' : ''} · ${t.total}
                  </b>
                </div>
                <div className="qr">
                  <QrCode />
                  <small>{t.code}</small>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty empty--tickets">
            <Ticket />
            <h2>No tickets yet.</h2>
            <p>Your next useful conversation could be one event away.</p>
            <Button to="/events">Discover events</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
