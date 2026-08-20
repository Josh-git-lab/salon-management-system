type StatCardProps = {
  title: string
  value: string
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <strong>{value}</strong>
    </div>
  )
}

export default StatCard