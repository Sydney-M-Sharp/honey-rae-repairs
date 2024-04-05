import { useEffect, useState } from "react"// we have to import this function from react it returns a array holding the value of the state and 
import { getAllTickets } from "./services/ticketService.js"
import "./App.css"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set!")
    })
  }, [])

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter
        (ticket => ticket.emergency === true
          )
      setFilteredTickets(emergencyTickets)
    }
    else {
      setFilteredTickets(allTickets)

    }
  }, [showEmergencyOnly, allTickets])

  return <div class="tickets-container">
    <h2>Tickets</h2>
    <div>
      <button className="filter-bun btn-primary" onClick={() => (setShowEmergencyOnly(true))} >Emergency</button>
      <button className="filter-bun btn-info" onClick={() => (setShowEmergencyOnly(false))} >Show All</button>
    </div>
    <article className="tickets">
      {filteredTickets.map((ticket) => {
        return (
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info">#{ticket.id}</header>
            <div> {ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>


          </section>
        )

      })}

    </article>
  </div>

}