import {NextResponse} from "next/server"

export const GET = async (req, { params }) => {
    // console.log(req)
    console.log(params.id)

    return NextResponse.json({msg : "Success for Dynamic Route"}, {status : "200"})
}



//This is dynamic routing api.