import QuotesCard from "@/components/QuotesCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 5;

async function getQuote(url) {
  const res = await fetch(
    url,
    { cache: "no-store" },
    { next: { revalidate: 5 } }
  );
  const quote = await res.json();
  console.log("quote", quote);

  if (!quote) notFound();
  return quote;
}
export default async function Home() {
  const quote = await getQuote("https://dummyjson.com/quotes/random");

  return (
    <main className="container p-4 h-screen flex justify-center items-center bg-dark">
      <Link className="px-4 py-2 border border-s-slate-600 " href="/">
        Home
      </Link>
      <QuotesCard quote={quote.quote} author={quote.author} />
    </main>
  );
}
