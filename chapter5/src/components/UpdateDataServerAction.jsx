import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post"

const update = async (formData) => {
    'use server'
    await connectDB()
    const postId = formData.get('id')
    const result = await PostModel.findByIdAndUpdate(postId, {
        title: formData.get('title'),
        body: formData.get('body')
    }, { new: true })
    console.log(result)
}

const UpdateDataServerAction = ({ post }) => {
    return (
        <form action={update}>
            <input type="hidden" name="id" value={post._id} />
            Title: <input
                type="text"
                name="title"
                defaultValue={post.title}
                className="text-black p-2 bg-gray-200 rounded" />
            <br /><br />
            Body: <input
                type="text"
                name="body"
                defaultValue={post.body}
                className="text-black p-2 bg-gray-200 rounded" />
            <br /><br />
            <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Update</button>
        </form>
    )
}

export default UpdateDataServerAction