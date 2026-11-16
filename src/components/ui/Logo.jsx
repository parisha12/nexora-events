import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <Link className="logo" to="/">
      <span className="logo__symbol">
        <i />
        <i />
      </span>
      <b>NEXORA</b>
    </Link>
  );
}
