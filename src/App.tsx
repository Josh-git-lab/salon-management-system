import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <h1>Dashboard</h1>
        <p>Welcome back 👋</p>

        <div className="stats">
          <div className="card">
            <h3>Today's Appointments</h3>
            <strong>12</strong>
          </div>

          <div className="card">
            <h3>Today's Revenue</h3>
            <strong>₹8,450</strong>
          </div>

          <div className="card">
            <h3>Customers</h3>
            <strong>28</strong>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App