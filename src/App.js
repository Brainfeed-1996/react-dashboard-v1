import React, { useState } from "react";
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

const navItems = ["Overview", "Team", "Analytics", "Revenue", "Security", "Settings"];

function App() {
  const [activeTab, setActiveTab] = useState("Overview");

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
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeTab === item ? "is-active" : ""}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="sidebar-card">
          <h4>Weekly Pulse</h4>
          <p>Retention improved by 6.2% this week.</p>
          <button className="ghost-button">View report</button>
        </div>
      </aside>

      <main className="main">
        {activeTab === "Overview" && (
          <>
            <header className="topbar">
              <div>
                <p className="eyebrow">Tuesday, Feb 3</p>
                <h1>Welcome back, Olivier.</h1>
                <p className="subtext">
                  Here is what is happening across your platform today.
                </p>
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
          </>
        )}

        {activeTab !== "Overview" && (
          <div className="tab-screen">
            {activeTab === "Team" && (
              <>
                <div className="tab-header">
                  <div>
                    <p className="eyebrow">Team</p>
                    <h2>People & Access</h2>
                    <p className="subtext">Manage roles, squads, and workload.</p>
                  </div>
                  <button className="primary-button">Invite member</button>
                </div>
                <div className="grid-2">
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Squad Capacity</h3>
                      <button className="ghost-button">Adjust</button>
                    </div>
                    <div className="capacity">
                      {[
                        ["Platform", 82],
                        ["Growth", 64],
                        ["Security", 48],
                      ].map(([label, value]) => (
                        <div className="capacity-row" key={label}>
                          <span>{label}</span>
                          <div className="capacity-bar">
                            <span style={{ width: `${value}%` }} />
                          </div>
                          <span>{value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Upcoming Reviews</h3>
                      <button className="ghost-button">Calendar</button>
                    </div>
                    <ul className="activity">
                      <li>Mon 10:00 - A. Singh (Quarterly)</li>
                      <li>Tue 15:30 - L. Martin (Promotion)</li>
                      <li>Thu 09:00 - N. Rousseau (Onboarding)</li>
                    </ul>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h3>Team Directory</h3>
                    <button className="ghost-button">Export</button>
                  </div>
                  <div className="table">
                    <div className="table-row table-head">
                      <span>Name</span>
                      <span>Role</span>
                      <span>Status</span>
                      <span>Region</span>
                    </div>
                    {[
                      ["S. Dupont", "VP Ops", "Active", "Paris"],
                      ["L. Martin", "Growth Lead", "Active", "Lyon"],
                      ["A. Singh", "Security Eng", "On leave", "Berlin"],
                      ["N. Rousseau", "Product", "Active", "Montreal"],
                    ].map(([name, role, status, region]) => (
                      <div className="table-row" key={name}>
                        <span>{name}</span>
                        <span>{role}</span>
                        <span className="pill">{status}</span>
                        <span className="table-value">{region}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "Analytics" && (
              <>
                <div className="tab-header">
                  <div>
                    <p className="eyebrow">Analytics</p>
                    <h2>Signal Overview</h2>
                    <p className="subtext">Track cohorts, funnels, and retention.</p>
                  </div>
                  <button className="primary-button">Build dashboard</button>
                </div>
                <section className="kpi-grid">
                  {[
                    ["Activation", "41.2%", "+3.8%"],
                    ["Retention", "27.6%", "+1.4%"],
                    ["Churn", "3.1%", "-0.6%"],
                    ["NPS", "56", "+4"],
                  ].map(([label, value, trend]) => (
                    <div className="kpi-card" key={label}>
                      <div className="kpi-top">
                        <p>{label}</p>
                        <span className="badge positive">{trend}</span>
                      </div>
                      <h2>{value}</h2>
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
                <div className="grid-2">
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Funnel Conversion</h3>
                      <button className="ghost-button">Segments</button>
                    </div>
                    <div className="funnel">
                      {[
                        "Visit → 100%",
                        "Signup → 44%",
                        "Activation → 23%",
                        "Paid → 8%",
                      ].map((step) => (
                        <div className="funnel-step" key={step}>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Cohort Health</h3>
                      <button className="ghost-button">Retention</button>
                    </div>
                    <ul className="activity">
                      <li>Week 1 cohort retention at 31%.</li>
                      <li>Enterprise plan adoption up 12%.</li>
                      <li>Average session duration 6m 14s.</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Revenue" && (
              <>
                <div className="tab-header">
                  <div>
                    <p className="eyebrow">Revenue</p>
                    <h2>Monetization Pulse</h2>
                    <p className="subtext">Bookings, renewals, and pipeline strength.</p>
                  </div>
                  <button className="primary-button">Forecast</button>
                </div>
                <div className="grid-2">
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Bookings This Month</h3>
                      <button className="ghost-button">Details</button>
                    </div>
                    <div className="revenue-total">$482,900</div>
                    <p className="subtext">+14% vs last month</p>
                    <div className="chart">
                      {[32, 58, 46, 72, 66, 88].map((h, i) => (
                        <div
                          key={i}
                          className="chart-bar"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Renewal Risk</h3>
                      <button className="ghost-button">Playbooks</button>
                    </div>
                    <div className="risk-list">
                      {[
                        ["Globex", "High", "negative"],
                        ["Initech", "Medium", "neutral"],
                        ["Umbrella", "Low", "positive"],
                      ].map(([name, level, tone]) => (
                        <div className="risk-item" key={name}>
                          <span>{name}</span>
                          <span className={`badge ${tone}`}>{level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h3>ARR Composition</h3>
                    <button className="ghost-button">Export</button>
                  </div>
                  <div className="table">
                    <div className="table-row table-head">
                      <span>Plan</span>
                      <span>Accounts</span>
                      <span>ARR</span>
                      <span>Growth</span>
                    </div>
                    {[
                      ["Enterprise", "42", "$1.4M", "+9%"],
                      ["Scale", "180", "$920k", "+6%"],
                      ["Startup", "640", "$380k", "+3%"],
                      ["Free", "1,240", "$0", "0%"],
                    ].map(([plan, accounts, arr, growth]) => (
                      <div className="table-row" key={plan}>
                        <span>{plan}</span>
                        <span>{accounts}</span>
                        <span className="table-value">{arr}</span>
                        <span className="pill">{growth}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "Security" && (
              <>
                <div className="tab-header">
                  <div>
                    <p className="eyebrow">Security</p>
                    <h2>Trust Center</h2>
                    <p className="subtext">Policy, access control, and posture.</p>
                  </div>
                  <button className="primary-button">Run audit</button>
                </div>
                <div className="grid-2">
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Compliance Status</h3>
                      <button className="ghost-button">Reports</button>
                    </div>
                    <ul className="activity">
                      <li>SOC2 Type II - Completed</li>
                      <li>ISO 27001 - In progress</li>
                      <li>GDPR DPA - Signed</li>
                    </ul>
                  </div>
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Access Controls</h3>
                      <button className="ghost-button">Manage</button>
                    </div>
                    <div className="security-grid">
                      {[
                        ["MFA Adoption", "92%"],
                        ["Admin Seats", "14"],
                        ["API Keys Rotated", "6/8"],
                      ].map(([label, value]) => (
                        <div className="security-card" key={label}>
                          <p>{label}</p>
                          <h4>{value}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h3>Incident Response</h3>
                    <button className="ghost-button">Escalation</button>
                  </div>
                  <div className="alerts">
                    {[
                      [
                        "EU West latency spike",
                        "Root cause identified, mitigation rolling.",
                        "23m",
                      ],
                      ["Password spray attempt", "Blocked 126 IPs.", "1h"],
                    ].map(([title, detail, time]) => (
                      <div className="alert" key={title}>
                        <div>
                          <p className="alert-title">{title}</p>
                          <p className="alert-detail">{detail}</p>
                        </div>
                        <span className="alert-time">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "Settings" && (
              <>
                <div className="tab-header">
                  <div>
                    <p className="eyebrow">Settings</p>
                    <h2>Workspace Controls</h2>
                    <p className="subtext">
                      Tune notifications, integrations, and branding.
                    </p>
                  </div>
                  <button className="primary-button">Save changes</button>
                </div>
                <div className="grid-2">
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Branding</h3>
                      <button className="ghost-button">Preview</button>
                    </div>
                    <div className="settings-group">
                      <label>
                        Workspace name
                        <input defaultValue="React Deck" />
                      </label>
                      <label>
                        Support email
                        <input defaultValue="support@reactdeck.io" />
                      </label>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header">
                      <h3>Notifications</h3>
                      <button className="ghost-button">Channels</button>
                    </div>
                    <div className="settings-group">
                      {[
                        ["Weekly summary", true],
                        ["Incident alerts", false],
                        ["New feature rollouts", true],
                      ].map(([label, checked]) => (
                        <label className="toggle" key={label}>
                          <input type="checkbox" defaultChecked={checked} />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h3>Integrations</h3>
                    <button className="ghost-button">Marketplace</button>
                  </div>
                  <div className="integration-grid">
                    {["Slack", "Notion", "Stripe", "HubSpot"].map((tool) => (
                      <div className="integration-card" key={tool}>
                        <p>{tool}</p>
                        <button className="ghost-button">Connect</button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
