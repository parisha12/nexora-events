export default function MetricCard({ label, value, delta, icon: Icon }) {
  return (
    <div className="metric">
      <div>
        <span>{label}</span>
        <b>{value}</b>
        <small>{delta}</small>
      </div>
      <i>
        <Icon />
      </i>
    </div>
  );
}
