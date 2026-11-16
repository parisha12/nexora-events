import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Minus, Plus, Lock, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Field from '../components/ui/Field';
import { useEvents } from '../context/EventContext';
export default function Checkout() {
  const { slug } = useParams(),
    { buyTicket, events } = useEvents(),
    event = events.find((item) => item.slug === slug);
  const [qty, setQty] = useState(1),
    [done, setDone] = useState(false);
  if (!event) return <Navigate to="/events" />;
  const fee = Math.round(event.price * qty * 0.06),
    total = event.price * qty + fee;
  function submit(x) {
    x.preventDefault();
    buyTicket({
      event,
      qty,
      total,
      code: `NX-${Date.now().toString().slice(-6)}`,
    });
    setDone(true);
  }
  if (done)
    return (
      <section className="confirmation">
        <div>
          <CheckCircle2 />
          <span className="eyebrow">YOU’RE IN</span>
          <h1>See you in the room.</h1>
          <p>
            Your tickets are ready. A confirmation has been sent to your email.
          </p>
          <Button to="/tickets">View my tickets</Button>
        </div>
      </section>
    );
  return (
    <section className="section page">
      <Container>
        <div className="checkout-title">
          <span className="eyebrow">SECURE CHECKOUT</span>
          <h1>Complete your booking.</h1>
        </div>
        <div className="checkout">
          <form onSubmit={submit}>
            <h2>1. Your details</h2>
            <div className="field-row">
              <Field label="First name" required />
              <Field label="Last name" required />
            </div>
            <Field label="Work email" type="email" required />
            <Field label="Company" />
            <h2>2. Ticket quantity</h2>
            <div className="ticket-select">
              <div>
                <b>General admission</b>
                <span>Full event access and networking</span>
              </div>
              <div className="stepper">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  <Minus />
                </button>
                <b>{qty}</b>
                <button
                  type="button"
                  onClick={() => setQty(Math.min(10, qty + 1))}
                >
                  <Plus />
                </button>
              </div>
            </div>
            <label className="agree">
              <input type="checkbox" required /> I agree to the booking terms
              and attendee policy.
            </label>
            <Button type="submit">Pay ${total}</Button>
          </form>
          <aside className="order-card">
            <img src={event.image} alt="" />
            <span className="eyebrow">ORDER SUMMARY</span>
            <h3>{event.title}</h3>
            <p>
              {event.date}, {event.year} · {event.city}
            </p>
            <div>
              <span>
                ${event.price} × {qty}
              </span>
              <b>${event.price * qty}</b>
            </div>
            <div>
              <span>Service fee</span>
              <b>${fee}</b>
            </div>
            <div className="order-total">
              <span>Total</span>
              <b>${total}</b>
            </div>
            <small>
              <Lock /> Encrypted and secure payment
            </small>
          </aside>
        </div>
      </Container>
    </section>
  );
}
