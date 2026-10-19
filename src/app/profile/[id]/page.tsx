import Link from "next/link";

export default async function UserProfile({ params }: any) {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="flex flex-col items-center text-center p-10 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
          User <span className="text-purple-500">Details</span>
        </h1>
        <p className="text-gray-400 mb-8">Viewing specific user information.</p>

        <div className="w-full mb-8">
          <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
            User ID
          </p>
          <p className="p-3 bg-gray-950 border border-gray-800 text-purple-400 rounded-xl text-sm font-mono break-all shadow-inner">
            {id}
          </p>
        </div>

        <Link
          href="/profile"
          className="w-full text-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all border border-gray-700 hover:border-gray-500 shadow-sm"
        >
          &larr; Back to Profile
        </Link>
      </div>
    </div>
  );
}
