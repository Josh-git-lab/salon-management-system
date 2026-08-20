type Appointment = {
  id: number
  customer: string
  service: string
  time: string
  staff: string
}

const appointments: Appointment[] = [
  {
    id: 1,
    customer: 'Ananya Thomas',
    service: 'Haircut & Styling',
    time: '10:00 AM',
    staff: 'Arun',
  },
  {
    id: 2,
    customer: 'Rahul Menon',
    service: 'Hair Spa',
    time: '11:30 AM',
    staff: 'Josh',
  },
  {
    id: 3,
    customer: 'Meera Nair',
    service: 'Facial',
    time: '1:00 PM',
    staff: 'Anu',
  },
  {
    id: 4,
    customer: 'Daniel Mathew',
    service: 'Beard Styling',
    time: '2:30 PM',
    staff: 'Arun',
  },
]

function AppointmentList() {
  return (
    <section className="appointments">
      <div className="section-header">
        <div>
          <h2>Upcoming Appointments</h2>
          <p>Today's scheduled appointments</p>
        </div>

        <button className="view-all-button">
          View All
        </button>
      </div>

      <div className="appointment-list">
        {appointments.map((appointment) => (
          <div className="appointment" key={appointment.id}>
            <div className="appointment-time">
              <strong>{appointment.time}</strong>
            </div>

            <div className="appointment-details">
              <strong>{appointment.customer}</strong>
              <span>{appointment.service}</span>
            </div>

            <div className="appointment-staff">
              <span>Staff</span>
              <strong>{appointment.staff}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AppointmentList