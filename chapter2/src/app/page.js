import LearnDataFetching from "@/components/LearnDataFetching";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LearnDataFetching />
    </main>
  );
}


//Caching in fetch(no-store, revalidate, ..).  Bydefault Nextjs will cache the data.
//Creating "loading" file in app folder for getting loading UI.
//Creating "not-found" file in app folder for getting not found error.

//Note : These both pages can be created in specific folders or routes as well.