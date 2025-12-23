import Link from "next/link";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>New here? <Link href="/register">Register</Link></p>
    </div>
  );
}
