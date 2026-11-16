import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Users, Ticket } from 'lucide-react';
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <span>ORGANIZER STUDIO</span>
      <NavLink end to="/organizer">
        <LayoutDashboard />
        Overview
      </NavLink>
      <NavLink to="/organizer/create">
        <PlusCircle />
        Create event
      </NavLink>
      <NavLink to="/organizer/attendees">
        <Users />
        Attendees
      </NavLink>
      <NavLink to="/tickets">
        <Ticket />
        Tickets
      </NavLink>
    </aside>
  );
}
