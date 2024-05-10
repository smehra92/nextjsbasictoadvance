import {NextResponse} from "next/server"

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
//http://localhost:3000/api/allcrud/updatedatabyid/1