export const 
fetchUsers=async () =>{
   const apicall =await fetch("https://jsonplaceholder.typicode.com/users")
   const apires = await apicall.json()
   return apires
   
}