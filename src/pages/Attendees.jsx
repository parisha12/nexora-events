import { useMemo, useState } from 'react';
import { Search, Download, UserCheck, ScanLine } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Sidebar from '../components/dashboard/Sidebar';
import { attendees } from '../data/attendees';
export default function Attendees() {
  const [q, setQ] = useState('');
  const list = useMemo(
    () =>
      attendees.filter((a) =>
        `${a.name} ${a.email} ${a.company}`
          .toLowerCase()
          .includes(q.toLowerCase())
      ),
    [q]
  );
  return (
    <section className="dashboard-page">
      <Container className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-main">
          <div className="dashboard-head">
            <div>
              <span className="eyebrow">FUTURE OF WORK SUMMIT</span>
              <h1>Attendees</h1>
              <p>Manage registrations and keep the door moving.</p>
            </div>
            <Button>
              <ScanLine /> Open check-in
            </Button>
          </div>
          <div className="attendee-stats">
            <div>
              <UsersIcon />
              <b>1,240</b>
              <span>Registered</span>
            </div>
            <div>
              <UserCheck />
              <b>812</b>
              <span>Checked in</span>
            </div>
            <div>
              <b>65%</b>
              <span>Arrival rate</span>
            </div>
          </div>
          <div className="attendee-card">
            <div className="attendee-tools">
              <label>
                <Search />
                <input
                  placeholder="Search name, email or company"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </label>
              <Button variant="outline-dark">
                <Download /> Export CSV
              </Button>
            </div>
            <div className="attendee-table">
              <div className="attendee-row attendee-row--head">
                <span>Attendee</span>
                <span>Company</span>
                <span>Ticket</span>
                <span>Status</span>
              </div>
              {list.map((a) => (
                <div className="attendee-row" key={a.email}>
                  <span>
                    <i>
                      {a.name
                        .split(' ')
                        .map((x) => x[0])
                        .join('')}
                    </i>
                    <b>
                      {a.name}
                      <small>{a.email}</small>
                    </b>
                  </span>
                  <span>{a.company}</span>
                  <span>{a.ticket}</span>
                  <span>
                    <Badge
                      tone={a.status === 'Checked in' ? 'teal' : 'neutral'}
                    >
                      {a.status}
                    </Badge>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
function UsersIcon() {
  return <span className="users-symbol">●●●</span>;
}
