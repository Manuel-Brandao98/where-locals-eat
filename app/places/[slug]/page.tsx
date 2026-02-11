import Link from "next/link"
import type { Place } from "../../../lib/places"
import { places } from "../../../lib/places"

export default function PlaceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const place = places.find((p: Place) => p.slug === params.slug)

  if (!place) {
    return (
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-bold">Place not found</h1>
        <p className="mt-2 text-gray-600">
          This place doesn’t exist yet — try the list.
        </p>
        <Link href="/places" className="mt-6 inline-block underline">
          Back to Places
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <Link href="/places" className="text-sm text-gray-600 underline">
        ← Back to Places
      </Link>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{place.name}</h1>
      <p className="mt-2 text-gray-600">
        {place.area} · {place.type} · {place.priceRange}
      </p>

      <div className="mt-6 rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">Why it matters</h2>
        <p className="mt-2 text-gray-700">{place.highlight}</p>

        <h3 className="mt-6 text-sm font-semibold text-gray-600">Tags</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {place.tags.map((t: string) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
