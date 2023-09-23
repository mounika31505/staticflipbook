import React from 'react'

export const fetchpost = async () => {
    const title = await fetch("https://jsonplaceholder.typicode.com/posts")
    const ptres = await title.json()
    return ptres

}
// export const fetchpost =async()=>{
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((title) => {
//         return title.json()
//     })
//     .then((json) => {
//         console.log(json)
//     })
//     return fetchpost
// }


