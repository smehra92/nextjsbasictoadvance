//3rd party api call from server
//In "Server component" we are calling the 3rd party "PAID / SECRET" api,
//and then just the data is sent to the "Front end" i.e. HomePage
//Eliminating the risk of data leaking.
//Frontend is requesting backend and Backend is requesting JSONPlaceHolder api.


import {NextResponse} from "next/server"

export const GET = async (req) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()

    return NextResponse.json({"data" : users})
} 