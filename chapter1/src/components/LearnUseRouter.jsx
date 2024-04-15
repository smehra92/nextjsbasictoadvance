"use client"
import { useRouter } from "next/navigation"

const LearnUseRouter = () => {
  
    const router = useRouter();
    // console.log(router)
    return (
    <>
    <button className=" bg-red-400 p-2 rounded"
    type="button"
    onClick={() => {router.push("/firstroute")}}>UseRouter</button>
    </>
  )
}

export default LearnUseRouter