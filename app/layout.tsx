import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Where Locals Eat — Porto Roots",
  description: "Traditional taverns & honest local food in Porto.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
            <Link href="/" className="font-semibold">
              Where Locals Eat <span className="text-gray-500">— Porto Roots</span>
            </Link>

            <nav className="flex gap-4 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <Link href="/places" className="hover:text-gray-900">Places</Link>
              <Link href="/about" className="hover:text-gray-900">About</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-12 border-t">
          <div className="mx-auto max-w-4xl p-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Where Locals Eat — Porto Roots
          </div>
        </footer>
      </body>
    </html>
  )
}
