import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Upload,
  CalendarDays,
  MapPin,
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Field from '../components/ui/Field';
import ProgressBar from '../components/ui/ProgressBar';
import Sidebar from '../components/dashboard/Sidebar';
import { useEvents } from '../context/EventContext';
import fallback from '../assets/images/future-stage.jpg';
export default function CreateEvent() {
  const [step, setStep] = useState(1),
    [done, setDone] = useState(false);
  const [form, setForm] = useState({
    title: '',
    category: 'Conference',
    date: '',
    time: '09:00',
    venue: '',
    city: '',
    price: 99,
    capacity: 250,
    description: '',
  });
  const { setCreated } = useEvents(),
    nav = useNavigate();
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  function publish() {
    const event = {
      ...form,
      slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      year: '2026',
      date: form.date || 'Dec 12',
      image: fallback,
      attendees: 0,
      host: 'Your organization',
      tags: ['Business', 'Ideas'],
    };
    setCreated((x) => [event, ...x]);
    setDone(true);
  }
  if (done)
    return (
      <section className="confirmation">
        <div>
          <Check />
          <span className="eyebrow">EVENT PUBLISHED</span>
          <h1>Your room is live.</h1>
          <p>Start sharing your page and watch registrations arrive.</p>
          <Button to="/organizer">Go to dashboard</Button>
        </div>
      </section>
    );
  return (
    <section className="dashboard-page">
      <Container className="dashboard-layout">
        <Sidebar />
        <div className="create-main">
          <button className="back" onClick={() => nav('/organizer')}>
            <ArrowLeft /> Back to overview
          </button>
          <div className="create-head">
            <div>
              <span className="eyebrow">CREATE EVENT · STEP {step} OF 3</span>
              <h1>
                {
                  ['The essentials', 'Place & tickets', 'Review & launch'][
                    step - 1
                  ]
                }
              </h1>
            </div>
            <div>
              <span>{Math.round((step / 3) * 100)}% complete</span>
              <ProgressBar value={(step / 3) * 100} />
            </div>
          </div>
          {step === 1 && (
            <div className="form-card">
              <Field
                label="Event name"
                name="title"
                value={form.title}
                onChange={update}
                placeholder="e.g. Ideas in Motion 2026"
              />
              <div className="field-row">
                <Field
                  label="Category"
                  as="select"
                  name="category"
                  value={form.category}
                  onChange={update}
                >
                  <option>Conference</option>
                  <option>Workshop</option>
                  <option>Networking</option>
                  <option>Leadership</option>
                  <option>Technology</option>
                </Field>
                <Field label="Format" as="select">
                  <option>In person</option>
                  <option>Hybrid</option>
                  <option>Online</option>
                </Field>
              </div>
              <Field
                label="Event description"
                as="textarea"
                rows="6"
                name="description"
                value={form.description}
                onChange={update}
                placeholder="Tell attendees why this room matters..."
              />
              <label className="upload">
                <Upload />
                <b>Upload cover image</b>
                <span>PNG or JPG · 1600 × 900 recommended</span>
                <input type="file" hidden />
              </label>
            </div>
          )}
          {step === 2 && (
            <div className="form-card">
              <div className="field-row">
                <Field
                  label="Start date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={update}
                />
                <Field
                  label="Start time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={update}
                />
              </div>
              <div className="field-row">
                <Field
                  label="Venue"
                  name="venue"
                  value={form.venue}
                  onChange={update}
                  placeholder="The Glasshouse"
                />
                <Field
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={update}
                  placeholder="New York"
                />
              </div>
              <div className="field-row">
                <Field
                  label="Ticket price ($)"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={update}
                />
                <Field
                  label="Capacity"
                  name="capacity"
                  type="number"
                  value={form.capacity}
                  onChange={update}
                />
              </div>
              <div className="hint">
                <MapPin />
                <span>You can add detailed directions after publishing.</span>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="review-card">
              <img src={fallback} />
              <div>
                <span className="eyebrow">{form.category}</span>
                <h2>{form.title || 'Untitled event'}</h2>
                <p>
                  <CalendarDays /> {form.date || 'Date not set'} at {form.time}
                </p>
                <p>
                  <MapPin /> {form.venue || 'Venue'}, {form.city || 'City'}
                </p>
                <p>{form.description || 'No description added yet.'}</p>
                <div className="review-stats">
                  <span>
                    Ticket <b>${form.price}</b>
                  </span>
                  <span>
                    Capacity <b>{form.capacity}</b>
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="form-actions">
            {step > 1 && (
              <Button variant="outline-dark" onClick={() => setStep(step - 1)}>
                <ArrowLeft /> Previous
              </Button>
            )}
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>
                Continue <ArrowRight />
              </Button>
            ) : (
              <Button onClick={publish}>
                Publish event <Check />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
