import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post"
import UpdateDataServerAction from "@/components/UpdateDataServerAction";
import DeleteDataServerAction from "@/components/DeleteDataServerAction";

const GetDataServerAction = async () => {
    await connectDB()
    const results = await PostModel.find()

    return <div className="space-y-6">
        {results.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                    <DeleteDataServerAction post={post}>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                            Delete
                        </button>
                    </DeleteDataServerAction>
                </div>
                <p className="text-2xl font-bold text-gray-800">{post.body}</p>
                <UpdateDataServerAction post={post}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Update
                    </button>
                </UpdateDataServerAction>
            </div>
        ))}
    </div>
}

export default GetDataServerAction