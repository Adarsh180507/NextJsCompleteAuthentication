"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nope");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login"); // Fixed this to redirect to /login instead of /logout
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error: any) {
      toast.error("Failed to fetch user details");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="flex flex-col items-center p-10 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            Profile Dashboard
          </h1>
          <p className="text-gray-400 text-sm">
            Manage your secure session and account.
          </p>
        </div>

        <div className="w-full mb-8 flex flex-col items-center">
          <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
            User Identifier
          </p>
          {data === "nope" ? (
            <span className="px-4 py-2 bg-gray-800 text-gray-400 rounded-xl text-sm border border-gray-700">
              No data loaded
            </span>
          ) : (
            <Link
              href={`/profile/${data}`}
              className="px-4 py-2 bg-green-900/30 text-green-400 hover:bg-green-900/50 border border-green-800/50 rounded-xl text-sm font-mono transition-colors shadow-sm hover:shadow-green-900/20"
            >
              ID: {data}
            </Link>
          )}
        </div>

        <div className="flex flex-col w-full gap-4">
          <button
            onClick={getUserDetails}
            className="w-full px-6 py-3 font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-lg hover:shadow-purple-500/25 border border-purple-500"
          >
            Get User Details
          </button>

          <button
            onClick={logout}
            className="w-full px-6 py-3 font-semibold rounded-xl bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white transition-all border border-gray-700 hover:border-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
