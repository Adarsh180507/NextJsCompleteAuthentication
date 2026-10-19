import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
          Welcome to <span className="text-blue-500">AuthApp</span>
        </h1>

        <p className="mt-3 text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl">
          A secure, full-stack authentication system built with Next.js,
          MongoDB, and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full max-w-4xl gap-6">
          <Link
            href="/login"
            className="group flex flex-col items-center justify-center p-6 w-full sm:w-64 h-40 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500 hover:bg-gray-800 transition-all shadow-sm hover:shadow-blue-500/20 text-center cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-100 group-hover:text-blue-400 transition-colors">
              Login &rarr;
            </h3>
            <p className="text-gray-400 text-sm">Access your secure account.</p>
          </Link>

          <Link
            href="/signup"
            className="group flex flex-col items-center justify-center p-6 w-full sm:w-64 h-40 rounded-2xl border border-gray-800 bg-gray-900 hover:border-green-500 hover:bg-gray-800 transition-all shadow-sm hover:shadow-green-500/20 text-center cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-100 group-hover:text-green-400 transition-colors">
              Sign Up &rarr;
            </h3>
            <p className="text-gray-400 text-sm">Register a brand new user.</p>
          </Link>

          <Link
            href="/profile"
            className="group flex flex-col items-center justify-center p-6 w-full sm:w-64 h-40 rounded-2xl border border-gray-800 bg-gray-900 hover:border-purple-500 hover:bg-gray-800 transition-all shadow-sm hover:shadow-purple-500/20 text-center cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-100 group-hover:text-purple-400 transition-colors">
              Profile &rarr;
            </h3>
            <p className="text-gray-400 text-sm">
              View your private dashboard.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
