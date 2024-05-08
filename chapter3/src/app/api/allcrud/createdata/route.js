import {NextResponse} from "next/server"

export const POST = async (req) => {
        const body = await req.json()

    if(!body.name){
        return NextResponse.json({error : "Name is required ..."},{status : 400} )
    }
    else {
    //return NextResponse.json(body)
    return NextResponse.json({id : 1, name : body.name}, {status : 201})
    }
}



// In POSTMAN : http://localhost:3000/api/allcrud/createdata