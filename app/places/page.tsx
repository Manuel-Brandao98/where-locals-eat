import Link from "next/link"
import { places } from "@/lib/places"

export default function PlacesPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold">Places</h1>
      <p className="mt-2 text-gray-600">
        A curated list of traditional taverns and honest local restaurants in Porto.
      </p>

      <div className="mt-6 grid gap-4">
        {places.map((p) => (
          <Link
            key={p.slug}
            href={`/places/${p.slug}`}
            className="rounded-2xl border p-5 hover:bg-gray-50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{p.name}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {p.area} · {p.type} · {p.priceRange}
                </p>
              </div>
              <span className="text-xs rounded-full border px-2 py-1 text-gray-600">
                {p.tags[0]}
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-700">{p.highlight}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded-full bg-gray-100 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
