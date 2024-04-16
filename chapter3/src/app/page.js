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
