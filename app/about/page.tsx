export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-2 text-gray-600">
        Porto Roots is a small project to preserve traditional food places in Porto —
        before they disappear.
      </p>

      <div className="mt-6 space-y-3">
        <p>
          This is not a review site. It’s a curated guide focused on authenticity,
          local culture, and honest food.
        </p>
        <p className="text-gray-600">
          Built with Next.js, React, TypeScript and Tailwind CSS.
        </p>
      </div>
    </main>
  )
}
