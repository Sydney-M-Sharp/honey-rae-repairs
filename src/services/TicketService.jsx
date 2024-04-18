export const getAllTickets = () =>{
    return fetch(`http://localhost:8088/serviceTickets?_embed=employeeTickets`).then((res) =>res.json()) // this fetch call now grabs the employee ticket data as well by using the embed call. 
}