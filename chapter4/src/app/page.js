import GetData from "@/components/GetData"
import PostData from "@/components/PostData";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostData />
      <GetData />
    </main>
  );
}
