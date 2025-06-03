import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg text-gray-300">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="px-6 py-3 bg-purple-600 rounded text-white font-semibold hover:bg-purple-700 transition">Go Home</Link>
    </main>
  );
}
