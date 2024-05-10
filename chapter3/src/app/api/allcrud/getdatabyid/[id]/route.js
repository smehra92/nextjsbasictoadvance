import {NextResponse} from "next/server"

export const GET = (req, { params }) => {

    if(params.id > 10)
    {
        return NextResponse.json({error : "Not Found ..."}, {status : "404"})
    }
    else {
        return NextResponse.json([
            {id : 1, firstname : "Siddharth"},
            {id : 2, lastname : "Mehra"}
        ])
    }
}
//http://localhost:3000/api/allcrud/getdatabyid/1