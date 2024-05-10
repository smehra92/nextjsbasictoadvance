import {NextResponse} from "next/server"
import prisma from "../../../../../prisma/client"

export const DELETE = async (req, { params }) => {

    const user = await prisma.Usermodel.findUnique({
        where : {id : parseInt(params.id)}
    })

    if(!user){
        return NextResponse.json({error : "User not found"}, {status : 404})
    }
    else {

        await prisma.Usermodel.delete({
            where : {id : user.id}
        })
        return NextResponse.json({msg : "User deleted..."})
    }
}


//POSTMAN