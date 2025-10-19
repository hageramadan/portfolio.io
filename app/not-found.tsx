import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h2 className="text-5xl font-bold">404</h2>
      <p className="mt-2 text-lg">This page could not be found.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-pro text-white rounded hover:bg-pro-max">
        Return Home
      </Link>
    </div>
  );
}
