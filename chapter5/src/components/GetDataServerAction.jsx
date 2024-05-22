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
                    <h2 className="text-2xl font-bold text-gray-800">{post.body}</h2>
                    <DeleteDataServerAction post={post} />
                </div>
                <UpdateDataServerAction post={post} />
            </div>
        ))}
    </div>
}

export default GetDataServerAction