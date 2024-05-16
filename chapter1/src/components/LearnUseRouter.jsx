"use client"
import { useRouter } from "next/navigation"

const LearnUseRouter = () => {

  const router = useRouter();
  // console.log(router)
  return (
    <>
      <button className=" bg-red-400 p-2 rounded"
        type="button"
        onClick={() => { router.push("/firstroute") }}>UseRouter</button>
    </>
  )
}

export default LearnUseRouter



//Its a programmatic way for "Link" navigation ,Since Link is a tag and sometimes we arent able to use it then we can use "useRouter". 