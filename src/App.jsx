import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Checkout from './pages/Checkout';
import MyTickets from './pages/MyTickets';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import Attendees from './pages/Attendees';
import NotFound from './pages/NotFound';

function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <Scroll />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/checkout/:slug" element={<Checkout />} />
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/organizer" element={<Dashboard />} />
          <Route path="/organizer/create" element={<CreateEvent />} />
          <Route path="/organizer/attendees" element={<Attendees />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
