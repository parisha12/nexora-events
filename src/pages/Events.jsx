import { useMemo, useState } from 'react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import EventFilters from '../components/events/EventFilters';
import EventCard from '../components/events/EventCard';
import { useEvents } from '../context/EventContext';
export default function Events() {
  const { events } = useEvents();
  const [filter, setFilter] = useState({
    q: '',
    city: 'All cities',
    category: 'All',
  });
  const list = useMemo(
    () =>
      events.filter(
        (e) =>
          (filter.city === 'All cities' || e.city === filter.city) &&
          (filter.category === 'All' || e.category === filter.category) &&
          `${e.title} ${e.host} ${e.tags?.join(' ')}`
            .toLowerCase()
            .includes(filter.q.toLowerCase())
      ),
    [events, filter]
  );
  return (
    <section className="section page">
      <Container>
        <SectionHeader
          eyebrow="DISCOVER"
          title="Find your next room."
          text="Conferences, workshops and gatherings curated for people building what comes next."
        />
        <EventFilters filter={filter} setFilter={setFilter} />
        <div className="results-head">
          <b>{list.length} events</b>
          <select>
            <option>Recommended</option>
            <option>Soonest</option>
            <option>Price: low to high</option>
          </select>
        </div>
        {list.length ? (
          <div className="event-grid event-grid--catalog">
            {list.map((e) => (
              <EventCard event={e} key={e.slug} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No events found</h3>
            <p>Try another city, category or search term.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
