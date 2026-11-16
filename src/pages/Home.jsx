import {
  ArrowRight,
  CalendarDays,
  Users,
  LineChart,
  CheckCircle2,
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import EventCard from '../components/events/EventCard';
import { events } from '../data/events';
export default function Home() {
  return (
    <>
      <section className="hero">
        <Container className="hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">THE BUSINESS EVENT PLATFORM</span>
            <h1>
              ROOMS WHERE <em>IDEAS MOVE.</em>
            </h1>
            <p>
              Discover defining business events—or create one people will talk
              about long after the lights go down.
            </p>
            <div className="hero__actions">
              <Button to="/events">
                Find an event <ArrowRight />
              </Button>
              <Button to="/organizer/create" variant="outline">
                Host with Nexora
              </Button>
            </div>
            <div className="hero__proof">
              <div>
                <b>4,800+</b>
                <span>events launched</span>
              </div>
              <div>
                <b>91</b>
                <span>cities worldwide</span>
              </div>
              <div>
                <b>4.9/5</b>
                <span>organizer rating</span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <img src={events[0].image} alt="Corporate conference" />
            <div className="float-card float-card--top">
              <span>UP NEXT</span>
              <b>Future of Work Summit</b>
              <small>Sep 18 · New York</small>
            </div>
            <div className="float-card float-card--bottom">
              <i>
                <Users />
              </i>
              <div>
                <b>1,240 attending</b>
                <span>Join the room</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="logo-strip">
        <Container>
          <span>TRUSTED BY TEAMS AT</span>
          <b>Northstar</b>
          <b>VERTEX</b>
          <b>BrightPath</b>
          <b>ORBIT</b>
          <b>FORMWORKS</b>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="CURATED FOR MOMENTUM"
            title="Events worth leaving your desk for."
            text="Sharp ideas, useful connections and thoughtful experiences—selected for ambitious people."
            action={
              <Button to="/events" variant="text">
                View all events <ArrowRight />
              </Button>
            }
          />
          <div className="event-grid">
            {events.slice(0, 3).map((e) => (
              <EventCard event={e} key={e.slug} />
            ))}
          </div>
        </Container>
      </section>
      <section className="organizer-band">
        <Container>
          <div>
            <span className="eyebrow">FOR ORGANIZERS</span>
            <h2>
              Build the room.
              <br />
              We’ll power the rest.
            </h2>
            <p>
              From launch page to live check-in, Nexora gives your team one
              clear operating system for remarkable events.
            </p>
            <Button to="/organizer/create">
              Create your event <ArrowRight />
            </Button>
          </div>
          <div className="feature-list">
            <article>
              <CalendarDays />
              <div>
                <b>Launch in minutes</b>
                <p>Flexible event pages, ticket types and schedules.</p>
              </div>
            </article>
            <article>
              <Users />
              <div>
                <b>Know your audience</b>
                <p>Registration insights and effortless attendee tools.</p>
              </div>
            </article>
            <article>
              <LineChart />
              <div>
                <b>Grow what works</b>
                <p>Live sales signals and clear post-event reporting.</p>
              </div>
            </article>
            <article>
              <CheckCircle2 />
              <div>
                <b>Run a smooth room</b>
                <p>Fast mobile check-in and real-time guest status.</p>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
