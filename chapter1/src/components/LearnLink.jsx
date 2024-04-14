import Link from "next/link"

const LearnLink = () => {
    const id = 4;
    return (
        <>
            <Link href="/firstroute"
                className=" bg-yellow-200 text-black p-2 rounded">First Route</Link>
            <Link href="/nestedroute/nextroute"
                className=" bg-yellow-200 text-black p-2 rounded">Nested Route</Link>
            <Link href={`dynamicroute/profile/${id}`}
                className=" bg-yellow-200 text-black p-2 rounded">Dynamic Link</Link>
        
        </>
    )
}

export default LearnLink