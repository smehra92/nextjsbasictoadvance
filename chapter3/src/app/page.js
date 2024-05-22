export default async function Home() {
  const res = await fetch("http://localhost:3000/api/blog/posts")
  const posts = await res.json()
  // console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.data.map((post) => (
          <div key={post.id}>
            <h1>{post.name}</h1>
          </div>
        ))}
    </main>
  );
}

//Here we can see that instead of calling the 3rd party api directly, we are
//taking the data from "localhost" which is being initiated on the server.