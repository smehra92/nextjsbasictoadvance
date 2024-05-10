import {NextResponse} from "next/server"

export const DELETE = (req, { params }) => {
    if(params.id > 10){
        return NextResponse.json({error : "User not found"}, {status : 404})
    }
    else {
        return NextResponse.json({})
    }
}
//http://localhost:3000/api/allcrud/deletedatabyid/1