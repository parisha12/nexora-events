export default function Field({ label, as = 'input', children, ...props }) {
  const Tag = as;
  return (
    <label className="field">
      <span>{label}</span>
      <Tag {...props}>{children}</Tag>
    </label>
  );
}
