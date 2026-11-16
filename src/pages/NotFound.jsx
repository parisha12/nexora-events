import Button from '../components/ui/Button';
export default function NotFound() {
  return (
    <section className="not-found">
      <span>404</span>
      <h1>This room doesn’t exist.</h1>
      <p>Let’s get you back where the ideas are moving.</p>
      <Button to="/">Return home</Button>
    </section>
  );
}
