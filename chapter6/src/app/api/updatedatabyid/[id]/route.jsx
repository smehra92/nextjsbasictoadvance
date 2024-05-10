import {NextResponse} from "next/server"
import prisma from "../../../../../prisma/client"

export const PUT = async (req, { params }) => {
    
    const body = await req.json()
    const user = await prisma.Usermodel.findUnique({
        where : { id : parseInt(params.id)}
    })
    if(!body.name){
        return NextResponse.json({error : "Invalid Request, Enter the Name."}, {status : 400})
    }
    if(!user) {
        return NextResponse.json({error : "User not found"}, {status : 404})
    } 
    else {
        const updatedUser = await prisma.Usermodel.update({
            where : {id : user.id},
            data : {
                name : body.name,
                email : body.email
            }
        })
        return NextResponse.json(updatedUser)
    }
}

//POSTMAN