import mongoose from "mongoose"

export default async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected Successfully...")
    } catch (error) {
        console.log(error)
    }
}