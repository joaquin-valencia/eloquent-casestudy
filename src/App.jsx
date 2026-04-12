import { useState } from 'react'
import './App.css'

const initialClients = [
  { id: 'u1', name: 'Acme Corp', email: 'contact@acme.com', segment: 'Enterprise', status: 'Active', startDate: 'Jan 14, 2023', totalSpent: 45248, transactions: 13, lastActive: '3/3/2026' },
  { id: 'u2', name: 'TechStart Inc', email: 'admin@techstart.io', segment: 'Startup', status: 'Active', startDate: 'Mar 9, 2023', totalSpent: 920, transactions: 3, lastActive: '2/23/2026' },
  { id: 'u3', name: 'John Doe Designs', email: 'john@doe.design', segment: 'Individual', status: 'Active', startDate: 'May 21, 2023', totalSpent: 783, transactions: 3, lastActive: '2/22/2026' },
  { id: 'u4', name: 'Global Logistics', email: 'info@glogistics.com', segment: 'Enterprise', status: 'Active', startDate: 'Nov 4, 2022', totalSpent: 48693, transactions: 13, lastActive: '2/15/2026' },
  { id: 'u5', name: 'FastFood Chain', email: 'supply@fastfood.com', segment: 'SME', status: 'Inactive', startDate: 'Feb 17, 2023', totalSpent: 1681, transactions: 7, lastActive: '12/18/2025' },
  { id: 'u6', name: 'Crypto Bros', email: 'moon@crypto.com', segment: 'Startup', status: 'Active', startDate: 'Jul 31, 2023', totalSpent: 799, transactions: 3, lastActive: '2/26/2026' },
  { id: 'u7', name: 'Sarah Smith', email: 'sarah@smith.com', segment: 'Individual', status: 'Active', startDate: 'Sep 11, 2023', totalSpent: 1097, transactions: 3, lastActive: '2/19/2026' },
  { id: 'u8', name: 'MegaCorp', email: 'it@megacorp.com', segment: 'Enterprise', status: 'Active', startDate: 'Jun 29, 2021', totalSpent: 55946, transactions: 15, lastActive: '2/12/2026' },
  { id: 'u9', name: 'DevShop Agency', email: 'team@devshop.co', segment: 'SME', status: 'Active', startDate: 'Apr 19, 2023', totalSpent: 2193, transactions: 7, lastActive: '2/23/2026' },
  { id: 'u10', name: 'FinTech Innovations', email: 'contact@fintech-inn.com', segment: 'Startup', status: 'Active', startDate: 'Jul 4, 2023', totalSpent: 842, transactions: 3, lastActive: '2/9/2026' },
  { id: 'u11', name: 'Maria Garcia', email: 'maria@garcia.com', segment: 'Individual', status: 'Active', startDate: 'Sep 30, 2023', totalSpent: 689, transactions: 3, lastActive: '2/17/2026' },
  { id: 'u12', name: 'RetailPro Systems', email: 'sales@retailpro.com', segment: 'Enterprise', status: 'Active', startDate: 'Mar 21, 2022', totalSpent: 60411, transactions: 14, lastActive: '12/18/2025' },
  { id: 'u13', name: 'Green Energy Co', email: 'info@greenenergy.com', segment: 'SME', status: 'Active', startDate: 'Jun 14, 2023', totalSpent: 1850, transactions: 8, lastActive: '2/22/2026' },
  { id: 'u14', name: 'Healthcare Plus', email: 'admin@healthcareplus.com', segment: 'Enterprise', status: 'Active', startDate: 'Jan 17, 2022', totalSpent: 43694, transactions: 13, lastActive: '12/17/2025' },
  { id: 'u15', name: 'RoboTech Startup', email: 'hello@robotech.io', segment: 'Startup', status: 'Active', startDate: 'Oct 13, 2023', totalSpent: 987, transactions: 3, lastActive: '2/21/2026' },
]
function DetailPage({ client, onBack, onSave, avgLTV, enterpriseRevenue, churnRisk }) {
  const [segment, setSegment] = useState(client.segment)
  const [status, setStatus] = useState(client.status)
  const [isEditing, setIsEditing] = useState(false)
  const [lifetimeValue, setLifetimeValue] = useState(client.totalSpent)
  const [transactions, setTransactions] = useState(client.transactions)
  const [lastActivity, setLastActivity] = useState(client.lastActive)

  function handleSave() {
    onSave({
      ...client,
      segment,
      status,
      totalSpent: Number(lifetimeValue),
      transactions: Number(transactions),
      lastActive: lastActivity,
    })
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-title">📈 Key Metrics</div>
        <div className="kpi-card">
          <div className="kpi-icon">$</div>
          <div className="kpi-label">Avg Customer LTV</div>
          <div className="kpi-value">${avgLTV.toLocaleString()}</div>
          <div className="kpi-sub">Average lifetime value per customer</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon">📈</div>
          <div className="kpi-label">Enterprise Revenue</div>
          <div className="kpi-value">{enterpriseRevenue}%</div>
          <div className="kpi-sub">Share of total transaction volume</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon">⚠️</div>
          <div className="kpi-label">Churn Risk (High Value)</div>
          <div className="kpi-value">{churnRisk}</div>
          <div className="kpi-sub">Enterprise/SME &gt; 60 days</div>
        </div>
        <div className="sidebar-footer">⚡ Eloquent AI</div>
      </aside>    

      <main className="main">
        <button className="back-btn" onClick={onBack}>← Back to Dashboard</button>

        <div className="detail-header">
          <div>
            <h2 className="detail-title">{client.name}</h2>
            <div className="detail-meta">
              <span className="detail-id">ID: {client.id}</span>
              <span>Joined {new Date(client.startDate).toLocaleDateString('en-US')}</span>
            </div>
          </div>
          <button className="save-btn" onClick={handleSave}>💾 Save Changes</button>
        </div>

        <div className="detail-grid">
          <div className="detail-card full-width">
            <div className="detail-card-title">Entity Configuration</div>
            <div className="config-row">
              <div className="config-field">
                <label>Client Segment</label>
                <select value={segment} onChange={e => setSegment(e.target.value)}>
                  <option>Enterprise</option>
                  <option>Startup</option>
                  <option>SME</option>
                  <option>Individual</option>
                </select>
              </div>
              <div className="config-field">
                <label>Status</label>
                <div className="status-display">
                  <span>{status}</span>
                  <span className={`status-dot status-dot-${status.toLowerCase()}`}></span>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-card-title">📋 Contact Details</div>
            <div className="contact-label">Email Address</div>
            <div className="contact-value">✉️ {client.email}</div>
          </div>

          <div className="detail-card">
            <div className="detail-card-title">
              💳 Financial Overview
              <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
                ✏️ Edit
              </button>
            </div>
            <div className="financial-grid">
              <div>
                <div className="fin-label">Lifetime Value</div>
                {isEditing
                  ? <input className="fin-input" value={lifetimeValue} onChange={e => setLifetimeValue(e.target.value)} />
                  : <div className="fin-value fin-value-primary">${Number(lifetimeValue).toLocaleString()}</div>
                }
              </div>
              <div>
                <div className="fin-label">Total Transactions</div>
                {isEditing
                  ? <input className="fin-input" value={transactions} onChange={e => setTransactions(e.target.value)} />
                  : <div className="fin-value">{transactions}</div>
                }
              </div>
              <div>
                <div className="fin-label">Last Activity</div>
                {isEditing
                  ? <input className="fin-input" value={lastActivity} onChange={e => setLastActivity(e.target.value)} />
                  : <div className="fin-value">📅 {lastActivity}</div>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  const [clients, setClients] = useState(initialClients)
  const [selectedClient, setSelectedClient] = useState(null)

  const today = new Date()

  const avgLTV = Math.round(
    clients.reduce((sum, c) => sum + c.totalSpent, 0) / clients.length
  )

  const totalSpent = clients.reduce((sum, c) => sum + c.totalSpent, 0)
  const enterpriseSpent = clients
    .filter(c => c.segment === 'Enterprise')
    .reduce((sum, c) => sum + c.totalSpent, 0)
  const enterpriseRevenue = ((enterpriseSpent / totalSpent) * 100).toFixed(1)

  const churnRisk = clients.filter(c => {
    const lastActive = new Date(c.lastActive)
    const daysSince = (today - lastActive) / (1000 * 60 * 60 * 24)
    return (c.segment === 'Enterprise' || c.segment === 'SME') && c.status == 'Active' && daysSince > 60
  }).length
  
  if (selectedClient) {
    return (
      <DetailPage
        client={selectedClient}
        avgLTV={avgLTV}
        enterpriseRevenue={enterpriseRevenue}
        churnRisk={churnRisk}
        onBack={() => setSelectedClient(null)}
        onSave={(updated) => {
          setClients(clients.map(c => c.id === updated.id ? updated : c))
          setSelectedClient(null)
        }}
      />
    )
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-title">
          <span>📈</span> Key Metrics
        </div>
        <div className="kpi-card">
          <div className="kpi-icon">$</div>
          <div className="kpi-label">Avg Customer LTV</div>
          <div className="kpi-value">${avgLTV.toLocaleString()}</div>
          <div className="kpi-sub">Average lifetime value per customer</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon">📈</div>
          <div className="kpi-label">Enterprise Revenue</div>
          <div className="kpi-value">{enterpriseRevenue}%</div>
          <div className="kpi-sub">Share of total transaction volume</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon">⚠️</div>
          <div className="kpi-label">Churn Risk (High Value)</div>
          <div className="kpi-value">{churnRisk}</div>
          <div className="kpi-sub">Enterprise/SME &gt; 60 days</div>
        </div>
        <div className="sidebar-footer">⚡ Eloquent AI</div>
      </aside>

      <main className="main">
        <h1 className="page-heading">Eloquent Case Study</h1>
        <h2 className="page-title">Client Entities</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Segment</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Total Spent</th>
              <th>Transactions</th>
              <th>Last Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr 
                key={client.id} 
                onClick={() => index < 5 ? setSelectedClient(client) : null}
                style={{ cursor: index < 5 ? 'pointer' : 'default' }}
              >
                <td>
                  <div className="client-name">{client.name}</div>
                  <div className="client-email">{client.email}</div>
                </td>
                <td>
                  <span className={`badge badge-${client.segment.toLowerCase()}`}>
                    {client.segment}
                  </span>
                </td>
                <td>
                  <span className={`status status-${client.status.toLowerCase()}`}>
                    ● {client.status}
                  </span>
                </td>
                <td>{client.startDate}</td>
                <td>${client.totalSpent.toLocaleString()}</td>
                <td>{client.transactions}</td>
                <td>{client.lastActive}</td>
                <td>›</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}