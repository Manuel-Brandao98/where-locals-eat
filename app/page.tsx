import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Where Locals Eat",
  description: "Traditional taverns & honest local food in Porto.",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Where Locals Eat
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Porto Roots — Traditional taverns & honest local food.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/places"
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
        >
          Explore Places
        </Link>
        <Link
          href="/about"
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
        >
          About the Project
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <p className="text-sm text-gray-600">
          Next up: add the first curated list and individual place pages.
        </p>
      </div>
    </main>
  )
}
