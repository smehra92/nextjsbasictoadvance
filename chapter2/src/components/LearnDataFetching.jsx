const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

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