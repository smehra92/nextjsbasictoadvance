import Link from "next/link"

const LearnLink = () => {
    const id = 4;
    return (
        <>
            <Link href="/firstroute"
                className=" underline text-white p-2 rounded">
                    First Route Link
            </Link>
            <Link href="/nestedroute/nextroute"
                className=" underline text-white p-2 rounded">
                    Nested Route Link
            </Link>
            <Link href={`dynamicroute/profile/${id}`}
                className=" underline text-white p-2 rounded">
                    Dynamic Link
            </Link>
            <Link href="/catchallroutes/xyz/abc/1"
                className=" underline text-white p-2 rounded">
                    CatchAll Routes Link
            </Link>
            <Link href="/querystringparameters/random?sortOrder=abc"
                className=" underline text-white p-2 rounded">
                    Query String Parameter Link
            </Link>
            <Link href="/separatecomponent"
                className=" underline text-white p-2 rounded">
                    Separate Component Link
            </Link>
            <Link href="/separatelayout"
                className=" underline text-white p-2 rounded">
                    Separate Layout Link
            </Link>
            <Link href="/commonnavbar"
                className=" underline text-white p-2 rounded">
                    Common NavBar Link
            </Link>
            <Link href="/parallelroutes"
                className=" underline text-white p-2 rounded">
                    Parallel Routes Link
            </Link>
            <Link href="/java"
                className=" underline text-white p-2 rounded">
                    Group Routes Link
            </Link>

        </>
    )
}

export default LearnLink