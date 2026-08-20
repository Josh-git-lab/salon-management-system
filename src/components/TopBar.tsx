function TopBar() {
  return (
    <header className="topbar">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back 👋</p>
      </div>

      <div className="topbar-right">
        <button className="notification-button">
          🔔
        </button>

        <div className="profile">
          <div className="profile-avatar">
            J
          </div>

          <div>
            <strong>Josh</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar