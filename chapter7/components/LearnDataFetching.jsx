const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users", {cache: "no-store",}); //When data is changing frequently.
  // const response = await fetch("https://jsonplaceholder.typicode.com/users", {next : {revalidate : 10}})  //Data is refreshed every 10 sec.

  return response.json();
};

const LearnDataFetching = async () => {
  const data = await getData();
  console.log(data);

  const filteredData = data.filter(
    (user) => user.address.city === "South Elvis"
  );

  return (
    <>
      <div className=" bg-gray-300 p-5 rounded">
        {data.length > 0 ? (
          data.map((e) => (
            <div key={e.id}>
              <h1>
                {e.id} : {e.name}
              </h1>
            </div>
          ))
        ) : (
          <h1>No Data</h1>
        )}
      </div>
      <div className=" bg-gray-300 p-5 rounded">
        {filteredData.length > 0 ? (
          filteredData.map((e) => (
            <div key={e.id}>
              <h1>Name : {e.name}</h1>
              <p>City: {e.address.city}</p>
            </div>
          ))
        ) : (
          <h1>No Data for the specified filter</h1>
        )}
      </div>
    </>
  );
};

export default LearnDataFetching;
