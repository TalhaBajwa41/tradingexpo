import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <h1>Market Overview</h1>

      <div className="cards">
        <div className="card">BTC / USD<br />$43,200</div>
        <div className="card">ETH / USD<br />$2,310</div>
        <div className="card">NASDAQ<br />15,840</div>
      </div>

      <div className="chart">📊 Chart Area</div>
    </Layout>
  );
}
