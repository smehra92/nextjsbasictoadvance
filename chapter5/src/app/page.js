import GetDataServerAction from "@/components/GetDataServerAction";
import PostDataServerAction from "@/components/PostDataServerAction";

export const metadata = {
  title: "Blog Posts",
  description: "This is blog post all"
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostDataServerAction />
      <GetDataServerAction />
    </main>
  );
}
