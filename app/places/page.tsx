import Link from "next/link"
import type { Metadata } from "next"
import { places } from "@/lib/places"

export const metadata: Metadata = {
  title: "Places | Where Locals Eat",
  description: "A curated list of traditional taverns and honest local restaurants in Porto.",
}

export default function PlacesPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold">Places</h1>
      <p className="mt-2 text-gray-600">
        A curated list of traditional taverns and honest local restaurants in Porto.
      </p>

      <div className="mt-6 grid gap-4">
        {places.map((place) => (
          <Link
            key={place.slug}
            href={`/places/${place.slug}`}
            className="rounded-2xl border p-5 hover:bg-gray-50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{place.name}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {place.area} · {place.type} · {place.priceRange}
                </p>
              </div>
              <span className="text-xs rounded-full border px-2 py-1 text-gray-600">
                {place.tags[0]}
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-700">{place.highlight}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {place.tags.map((tag) => (
                <span key={tag} className="text-xs rounded-full bg-gray-100 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
