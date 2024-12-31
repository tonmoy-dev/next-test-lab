import Link from "next/link";

export default async function Home() {
  return (
    <main className="container p-4 h-screen flex justify-center items-center bg-dark">
      <Link className="px-4 py-2 border  border-s-slate-600" href="/quote">
        Go to Quote
      </Link>
    </main>
  );
}
