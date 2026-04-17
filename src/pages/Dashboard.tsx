import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <h1 className="font-display font-bold text-3xl mb-4">Dashboard</h1>
      <p className="text-muted-foreground mb-4">Sidebar and stats goes here.</p>
      <Link to="/" className="text-primary hover:underline text-sm">Return Home</Link>
    </div>
  );
}
