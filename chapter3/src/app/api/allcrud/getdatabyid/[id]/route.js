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



export const PUT = async (req, { params }) => {
    
    //Validate the request body.
    const body = await req.json()
    if(!body.name){
        return NextResponse.json({error : "Invalid Request, Enter the Name."}, {status : 400})
    }
    if(params.id > 10) {
        return NextResponse.json({error : "User not found"}, {status : 404})
    }
    else {
        return NextResponse.json({id : 1, name : body.name})
    }
}
//http://localhost:3000/api/allcrud/getdatabyid/1



export const DELETE = (req, { params }) => {
    if(params.id > 10){
        return NextResponse.json({error : "User not found"}, {status : 404})
    }
    else {
        return NextResponse.json({})
    }
}
//http://localhost:3000/api/allcrud/getdatabyid/1
