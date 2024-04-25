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
            <button type="submit" className="p-2 bg-red-600">Delete</button>
        </form>
    )
}

export default DeleteDataServerAction