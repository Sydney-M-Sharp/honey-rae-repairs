export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]) //This line is declaring a variable called allTickets and a function to update that variable. They are both created using a useState hook and initially set to an empty array [].
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])

    useEffect(() => { //This line is creating an effect that runs when the component is first rendered.
        getAllTickets().then((ticketsArray) => {//This line is calling a function called getAllTickets and waiting for it to complete. Once it's done, it receives an array of tickets as a parameter and does something with them.
            setAllTickets(ticketsArray) //This line sets the value of allTickets to the received array of tickets.
            console.log("tickets set!") //This line logs a message in the console saying "tickets set!".
        })
    }, [])// blank array means we want it to happen on the first render. if the array contains items then it will render when they are changed

    useEffect(() => { //This line is creating an effect that runs whenever the values of showEmergencyOnly or allTickets change.
        if (showEmergencyOnly) {//This line checks if the value of showEmergencyOnly is true.
            const emergencyTickets = allTickets.filter//This line creates a new array called emergencyTickets that only contains the tickets from allTickets that have the property emergency set to true.
                (ticket => ticket.emergency === true
                )
            setFilteredTickets(emergencyTickets)//This line sets the value of filteredTickets to the emergencyTickets array.
        }
        else {
            setFilteredTickets(allTickets)//This line sets the value of filteredTickets to be the same as allTickets.

        }
    }, [showEmergencyOnly, allTickets])//This line is JSX code that represents a container for displaying the tickets.This is watching to see if emergency only changes to true

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
