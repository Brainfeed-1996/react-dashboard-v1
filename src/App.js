import React from "react";
import "./App.css";

const kpis = [
  { label: "Total Users", value: "18,245", trend: "+12.4%", tone: "positive" },
  { label: "Revenue", value: "$128,430", trend: "+8.1%", tone: "positive" },
  { label: "Active Sessions", value: "1,084", trend: "-2.3%", tone: "negative" },
  { label: "SLA Uptime", value: "99.97%", trend: "stable", tone: "neutral" },
];

const alerts = [
  { title: "Auth spike detected", detail: "EU West latency +14%", time: "2 min" },
  { title: "Payments re-try queue", detail: "342 pending items", time: "18 min" },
  { title: "New feature rollout", detail: "Beta cohort 25%", time: "1 hr" },
];

const deals = [
  { name: "Northwind", stage: "Negotiation", owner: "S. Dupont", value: "$74k" },
  { name: "Aperture", stage: "Discovery", owner: "L. Martin", value: "$22k" },
  { name: "Monarch", stage: "Proposal", owner: "A. Singh", value: "$51k" },
  { name: "Bluejay", stage: "Closed Won", owner: "N. Rousseau", value: "$96k" },
];

const activity = [
  "New user cohort imported (1,248 records).",
  "Marketing spend capped at $3,500/day.",
  "Ops issued incident summary for EU West.",
  "Data retention policy updated to 13 months.",
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">RD</div>
          <div>
            <p className="brand-title">React Deck</p>
            <p className="brand-sub">Admin Console</p>
          </div>
        </div>
        <nav className="nav">
          <button className="nav-item is-active">Overview</button>
          <button className="nav-item">Team</button>
          <button className="nav-item">Analytics</button>
          <button className="nav-item">Revenue</button>
          <button className="nav-item">Security</button>
          <button className="nav-item">Settings</button>
        </nav>
        <div className="sidebar-card">
          <h4>Weekly Pulse</h4>
          <p>Retention improved by 6.2% this week.</p>
          <button className="ghost-button">View report</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">Tuesday, Feb 3</p>
            <h1>Welcome back, Olivier.</h1>
            <p className="subtext">Here is what is happening across your platform today.</p>
          </div>
          <div className="topbar-actions">
            <div className="search">
              <span className="search-icon">⌕</span>
              <input type="text" placeholder="Search reports, users, events" />
            </div>
            <button className="primary-button">Create report</button>
          </div>
        </header>

        <section className="kpi-grid">
          {kpis.map((kpi) => (
            <div className="kpi-card" key={kpi.label}>
              <div className="kpi-top">
                <p>{kpi.label}</p>
                <span className={`badge ${kpi.tone}`}>{kpi.trend}</span>
              </div>
              <h2>{kpi.value}</h2>
              <div className="sparkline">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          ))}
        </section>

        <section className="grid-2">
          <div className="panel">
            <div className="panel-header">
              <h3>Revenue Trajectory</h3>
              <button className="ghost-button">Download CSV</button>
            </div>
            <div className="chart">
              <div className="chart-bar" style={{ height: "38%" }} />
              <div className="chart-bar" style={{ height: "64%" }} />
              <div className="chart-bar" style={{ height: "49%" }} />
              <div className="chart-bar" style={{ height: "82%" }} />
              <div className="chart-bar" style={{ height: "73%" }} />
              <div className="chart-bar" style={{ height: "91%" }} />
            </div>
            <div className="chart-legend">
              <span>Q1</span>
              <span>Q2</span>
              <span>Q3</span>
              <span>Q4</span>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Live Alerts</h3>
              <button className="ghost-button">See all</button>
            </div>
            <div className="alerts">
              {alerts.map((alert) => (
                <div className="alert" key={alert.title}>
                  <div>
                    <p className="alert-title">{alert.title}</p>
                    <p className="alert-detail">{alert.detail}</p>
                  </div>
                  <span className="alert-time">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid-2">
          <div className="panel">
            <div className="panel-header">
              <h3>Pipeline Deals</h3>
              <button className="ghost-button">View CRM</button>
            </div>
            <div className="table">
              <div className="table-row table-head">
                <span>Account</span>
                <span>Stage</span>
                <span>Owner</span>
                <span>Value</span>
              </div>
              {deals.map((deal) => (
                <div className="table-row" key={deal.name}>
                  <span>{deal.name}</span>
                  <span className="pill">{deal.stage}</span>
                  <span>{deal.owner}</span>
                  <span className="table-value">{deal.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Quick Actions</h3>
              <button className="ghost-button">Automations</button>
            </div>
            <div className="action-grid">
              <button className="action-card">
                <h4>Launch Campaign</h4>
                <p>Target top 3 conversion cohorts.</p>
              </button>
              <button className="action-card">
                <h4>Invite Teammates</h4>
                <p>Assign roles and permissions.</p>
              </button>
              <button className="action-card">
                <h4>Scale Infrastructure</h4>
                <p>Auto-scale to 12 nodes.</p>
              </button>
              <button className="action-card">
                <h4>Review Incidents</h4>
                <p>Resolve 4 open alerts.</p>
              </button>
            </div>
          </div>
        </section>

        <section className="grid-2">
          <div className="panel">
            <div className="panel-header">
              <h3>Usage Progress</h3>
              <button className="ghost-button">Manage plan</button>
            </div>
            <div className="progress-block">
              <div className="progress-row">
                <div>
                  <p>API Calls</p>
                  <span>92% of quota</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: "92%" }} />
                </div>
              </div>
              <div className="progress-row">
                <div>
                  <p>Storage</p>
                  <span>64% of quota</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: "64%" }} />
                </div>
              </div>
              <div className="progress-row">
                <div>
                  <p>Seats</p>
                  <span>38 of 50 used</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: "76%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Latest Activity</h3>
              <button className="ghost-button">Audit log</button>
            </div>
            <ul className="activity">
              {activity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
