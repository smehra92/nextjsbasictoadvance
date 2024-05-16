import Link from "next/link"

const CommonNavBar = () => {
    return(
        <>
            <Link href="/commonnavbar/dashboard"
                className=" underline text-white p-2 rounded">
                    Dashboard Link
            </Link>
            <Link href="/commonnavbar/profile"
                className=" underline text-white p-2 rounded">
                    Profile Link
            </Link>
        </>
    )
}

export default CommonNavBar