import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Trade Smarter with ExpoTrading</h1>
      <p>Advanced charts, fast execution, secure trading.</p>

      <div className="home-actions">
        <Link href="/register" className="btn primary">Get Started</Link>
        <Link href="/login" className="btn">Login</Link>
      </div>
    </div>
  );
}
