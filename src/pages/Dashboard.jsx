import {
  DollarSign,
  Ticket,
  Users,
  TrendingUp,
  MoreHorizontal,
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Sidebar from '../components/dashboard/Sidebar';
import MetricCard from '../components/dashboard/MetricCard';
import ProgressBar from '../components/ui/ProgressBar';
import { events } from '../data/events';
export default function Dashboard() {
  return (
    <section className="dashboard-page">
      <Container className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-main">
          <div className="dashboard-head">
            <div>
              <span className="eyebrow">GOOD MORNING, ALEX</span>
              <h1>Your events are moving.</h1>
            </div>
            <Button to="/organizer/create">Create event</Button>
          </div>
          <div className="metrics">
            <MetricCard
              label="Gross revenue"
              value="$84,290"
              delta="↑ 18.4% this month"
              icon={DollarSign}
            />
            <MetricCard
              label="Tickets sold"
              value="2,418"
              delta="↑ 12.1% this month"
              icon={Ticket}
            />
            <MetricCard
              label="Total attendees"
              value="1,987"
              delta="82% checked in"
              icon={Users}
            />
            <MetricCard
              label="Conversion"
              value="7.8%"
              delta="↑ 1.4% this month"
              icon={TrendingUp}
            />
          </div>
          <div className="dashboard-grid">
            <article className="chart-card">
              <div className="card-head">
                <div>
                  <span>REVENUE SIGNAL</span>
                  <h3>Ticket sales</h3>
                </div>
                <select>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="bar-chart">
                {[32, 48, 38, 65, 56, 76, 69, 88, 72, 95, 84, 100].map(
                  (x, i) => (
                    <i key={i} style={{ height: `${x}%` }}>
                      <span>${x * 90}</span>
                    </i>
                  )
                )}
              </div>
              <div className="axis">
                <span>Jul 01</span>
                <span>Jul 10</span>
                <span>Jul 20</span>
                <span>Jul 30</span>
              </div>
            </article>
            <article className="activity">
              <div className="card-head">
                <div>
                  <span>LIVE</span>
                  <h3>Recent activity</h3>
                </div>
                <MoreHorizontal />
              </div>
              {[
                '12 tickets sold · Future of Work',
                'Maya Chen checked in',
                'New VIP order · $499',
                'Event page reached 10k views',
                '18 tickets sold · Product Live',
              ].map((x, i) => (
                <p key={x}>
                  <i className={i === 1 ? 'teal' : ''} />
                  <span>{x}</span>
                  <small>{i * 3 + 2}m</small>
                </p>
              ))}
            </article>
          </div>
          <div className="event-table">
            <div className="card-head">
              <div>
                <span>PORTFOLIO</span>
                <h3>Active events</h3>
              </div>
              <Button to="/events" variant="text">
                View all
              </Button>
            </div>
            {events.slice(0, 3).map((e, i) => (
              <div className="event-row" key={e.slug}>
                <img src={e.image} />
                <div>
                  <b>{e.title}</b>
                  <span>
                    {e.date} · {e.city}
                  </span>
                </div>
                <div>
                  <span>Tickets</span>
                  <b>
                    {[824, 516, 391][i]} / {e.attendees}
                  </b>
                  <ProgressBar value={[66, 76, 43][i]} />
                </div>
                <strong>${[46280, 24910, 13090][i].toLocaleString()}</strong>
                <button className="icon-button">
                  <MoreHorizontal />
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
