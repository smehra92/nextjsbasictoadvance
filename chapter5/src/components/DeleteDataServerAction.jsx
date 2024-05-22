import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post"

const deletePost = async (formData) => {
    'use server'
    await connectDB()
    const postId = formData.get('id')
    await PostModel.findByIdAndDelete(postId)
}

const DeleteDataServerAction = ({ post }) => {
    return (
        <form action={deletePost}>
            <input type="hidden" name="id" value={post._id} />
            <button type="submit" className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Delete</button>
        </form>
    )
}

export default DeleteDataServerAction