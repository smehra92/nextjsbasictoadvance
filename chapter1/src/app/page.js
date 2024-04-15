import LearnImages from "@/components/LearnImages";
import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/LearnUseRouter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" text-5xl text-purple-300 font-semibold">Home Page</h1>
      <LearnLink />
      <LearnUseRouter />
      <LearnImages />
    </main>
  );
}
