import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/markets">Markets</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/settings">Settings</Link>
    </aside>
  );
}
