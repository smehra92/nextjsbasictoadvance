const getData = async () => {
    const res = await fetch("http://localhost:3000/api/posts", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const posts = await res.json()
    return posts
  }
  

const GetData = async () => {
    const results = await getData()
    // console.log(result)
    return <div>
        {results.result.map((post) => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <h1>{post.body}</h1>
                <br />
            </div>
        ))}
    </div>
}

export default GetData

