import Layout from "../components/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <h1>Your Portfolio</h1>
      <p>Total Balance: $12,450</p>

      <div className="card">BTC — 0.32</div>
      <div className="card">ETH — 4.1</div>
    </Layout>
  );
}
