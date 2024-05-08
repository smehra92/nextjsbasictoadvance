import {NextResponse} from "next/server"

export const GET = async (req) => {


    return NextResponse.json([
        {id : 1, firstname : "Siddharth"},
        {id : 2, lastname : "Mehra"}
    ])
}



//http://localhost:3000/api/allcrud/getdata
