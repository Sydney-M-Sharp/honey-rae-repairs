export const getAllEmployees = () =>{
    return fetch(`http://localhost:8088/employees?_expand=user`).then((res) =>res.json()) // this is an expand call and expands user as it is a forign key on this data set.
}