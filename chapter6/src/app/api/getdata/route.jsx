import {NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req) => {
        
     const users = await prisma.Usermodel.findMany()
    return NextResponse.json(users)
}

//http://localhost:3000/api/getdata