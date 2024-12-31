import QuotesCard from "@/components/QuotesCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default async function Home() {
  const data = await fetcher("https://dummyjson.com/quotes");

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4 p-4">
        {data?.quotes?.map((quote) => (
          <QuotesCard
            key={quote.id}
            quote={quote.quote}
            author={quote.author}
          />
        ))}
      </div>
    </main>
  );
}
