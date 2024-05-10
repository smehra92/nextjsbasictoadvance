import {NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const POST = async (req) => {
        const body = await req.json()

    if(!body.name){
        return NextResponse.json({error : "Name is required ..."},{status : 400} )
    }
    else {
        const user = await prisma.Usermodel.findUnique({
            where : {email : body.email}
        })
        if(user){
            return NextResponse.json({user : "User already exist..."},{status : 400})
        }
        else {

            const newuser = await prisma.Usermodel.create({
                data : {
                    name : body.name,
                    email : body.email
                }
            })
            
            return NextResponse.json(newuser, {status : 201})
        }
    }
}

//POSTMAN