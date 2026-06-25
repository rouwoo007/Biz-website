import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-cream">
      <h1 className="text-6xl font-bold text-copper-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-charcoal mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
