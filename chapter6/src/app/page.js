import Link from "next/link"

export default function Home() {
  return <div className=" flex flex-col justify-center items-center h-screen space-y-5">
    <Link className=" text-red-400 underline" href="/api/getdata">Get Data</Link>
    <Link className=" text-red-400 underline" href="/api/getdatabyid/1">Get Data by Id</Link>
    <h2>Rest Operations can be seen in POSTMAN</h2>
  </div>
}
