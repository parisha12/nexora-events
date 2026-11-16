import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { events as seedEvents } from '../data/events';

const EventContext = createContext(null);

function readStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
}

export function EventProvider({ children }) {
  const [tickets, setTickets] = useState(() => readStorage('nexora-tickets'));
  const [created, setCreated] = useState(() =>
    readStorage('nexora-created-events')
  );

  useEffect(() => {
    localStorage.setItem('nexora-tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('nexora-created-events', JSON.stringify(created));
  }, [created]);

  const events = useMemo(() => [...created, ...seedEvents], [created]);
  const buyTicket = (ticket) => setTickets((current) => [ticket, ...current]);

  return (
    <EventContext.Provider
      value={{ events, tickets, buyTicket, created, setCreated }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) throw new Error('useEvents must be used inside EventProvider');
  return context;
}
