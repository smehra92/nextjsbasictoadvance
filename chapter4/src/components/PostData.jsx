// "use client"
// import { useState } from "react"

// const PostData = () => {
//     const [formData, setFormData] = useState({
//         title : "",
//         body : ""
//     })

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//       }

//       const handleFormSubmit = async (e) => {
//         e.preventDefault()
//         const res = await fetch("http://localhost:3000/api/posts", {
//           method: "POST",
//           body: JSON.stringify(formData)
//         })
//         console.log("Response: ", res);
//       }

//     return (
//         <form action="" onSubmit={handleFormSubmit}>
//         Title: <input type="text" name="title" value={formData.title} onChange={handleChange} className="text-black p-2" />
//         <br /><br />
//         Body: <input type="text" name="body" value={formData.body} onChange={handleChange} className="text-black p-2" />
//         <br /><br />
//         <button type="submit" className="p-2 bg-rose-600">Submit</button>
//       </form>
//   )
// }

// export default PostData



"use client"
import { useState } from "react"

const PostData = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, body })
    })
    console.log("Response: ", await res.json())
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-black p-2"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Body:
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="text-black p-2"
          />
        </label>
      </div>
      <br />
      <button type="submit" className="p-2 bg-rose-600">Submit</button>
    </form>
  )
}

export default PostData