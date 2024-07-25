import {NextResponse} from "next/server"

//1. GET
export async function GET(req){
    //1. Normal Request Parameters.
    // console.log(req)

    
    //2. Header Parameters.
    // const requestHeaders = new Headers(req.headers)
    // console.log(requestHeaders)


    //3. URL Query Parameters (http://localhost:3000/api/products?Name=Shanu).
    // const {searchParams} = new URL(req.url)
    // console.log(searchParams)


    //4. Cookie
    // const cook = req.cookies
    // console.log(cook)

    return NextResponse.json({msg : "Hello, This is GET request (See in POSTMAN)"})
}


//2. POST
export async function POST(req){

    //Request Body
    const res = await req.json()
    console.log(res)
    return NextResponse.json({msg : "Hello, This is POST request (See in POSTMAN) : " + res.name}, {status:201})
}
