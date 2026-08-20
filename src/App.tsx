import './App.css'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import TopBar from './components/TopBar'
import AppointmentList from './components/AppointmentList'

function App() {
  return (
    <div className="app">
      <Sidebar />

        <main className="main-content">
          <TopBar />

          <div className="stats">
            <StatCard
              title="Today's Appointments"
              value="12"
            />

            <StatCard
              title="Today's Revenue"
              value="₹8,450"
            />

            <StatCard
              title="Customers"
              value="28"
            />
          </div>

          <AppointmentList />
        </main>

    </div>
  )
}

export default App