import React from 'react';

function App() {
  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="content">
        <header>
          <h1>Welcome Back, Administrator</h1>
        </header>
        <div className="stats-grid">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$34,000</p>
          </div>
          <div className="card">
            <h3>Active Sessions</h3>
            <p>12</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
