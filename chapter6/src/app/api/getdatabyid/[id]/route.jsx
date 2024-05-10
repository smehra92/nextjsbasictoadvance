import {NextResponse} from "next/server"
import prisma from "../../../../../prisma/client"

export const GET = async (req, { params }) => {
    
   const user = await prisma.Usermodel.findUnique({
    where : {id : parseInt(params.id)}
   })
    
    if(!user)
    {
        return NextResponse.json({error : "Not Found ..."}, {status : "404"})
    }
    else {
        return NextResponse.json(user)
    }
}

//http://localhost:3000/api/getdatabyid/1