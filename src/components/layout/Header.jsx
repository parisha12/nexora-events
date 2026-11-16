import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Plus } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { mainNav } from '../../constants/navigation';
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__in">
        <Logo />
        <nav className={open ? 'nav nav--open' : 'nav'}>
          {mainNav.map((n) => (
            <NavLink to={n.to} key={n.to} onClick={() => setOpen(false)}>
              {n.label}
            </NavLink>
          ))}
          <Button to="/organizer/create">
            <Plus size={16} /> Create event
          </Button>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
