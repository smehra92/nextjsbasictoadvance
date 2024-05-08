const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    // const response = await fetch("https://jsonplaceholder.typicode.com/users", {cache : "no-store"})  //When data is changing frequently.
    // const response = await fetch("https://jsonplaceholder.typicode.com/users", {next : {revalidate : 10}})  //Data is refreshed every 10 sec.

    return response.json();
}

const LearnDataFetching = async () => {
    const data = await getData();
    // console.log(data)
    return (
        <>
            {data.map((e) => (
                <div key={e.id}>
                    <h1>{e.id} : {e.name}</h1>
                </div>
            ))}
        </>
    )
}

export default LearnDataFetching


//Caching in fetch(no-store, revalidate, ..).  Bydefault Nextjs will cache the data.
//Creating "loading" file in app folder for getting loading UI.
//Creating "not-found" file in app folder for getting not found error.

