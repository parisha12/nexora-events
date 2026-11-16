import { Link } from 'react-router-dom';
export default function Button({
  to,
  variant = 'primary',
  children,
  className = '',
  ...props
}) {
  const cn = `button button--${variant} ${className}`;
  return to ? (
    <Link className={cn} to={to} {...props}>
      {children}
    </Link>
  ) : (
    <button className={cn} {...props}>
      {children}
    </button>
  );
}
