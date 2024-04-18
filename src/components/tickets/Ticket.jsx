import { useState } from "react"


export const Ticket = ({ticketObject}) =>{ // Ticket is a component that will return JSX like below
    //^^{ object destructuring} this means we are saying one level deep inside this object there is a property name that is equal to ...."this"
    
    const[employee,setEmployee]= useState([])
    const[assignedEmployee, setAssignedEmployee] =useState({})
    
    return <section className="ticketObject">
                        <header className="ticketObject-info">#{ticketObject.id}</header>
                        <div> {ticketObject.description}</div>
                        <footer>
                            <div>
                                <div className="ticketObject-info">emergency</div>
                                <div>{ticketObject.emergency ? "yes" : "no"}</div>
                            </div>
                        </footer>
                    </section>
}