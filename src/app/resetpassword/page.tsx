"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  const onReset = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/resetpassword", { token, password });
      toast.success("Password reset successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Invalid or expired token");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="flex flex-col p-10 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-white mb-4 tracking-tight text-center">
          Set New Password
        </h1>

        {!token && (
          <h2 className="text-red-500 text-center mb-4">
            No token provided in URL
          </h2>
        )}

        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-400 mb-1 mt-4"
        >
          New Password
        </label>
        <input
          className="w-full px-4 py-3 mb-6 rounded-xl bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-600"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />

        <button
          onClick={onReset}
          disabled={!password || !token || loading}
          className={`w-full px-6 py-3 font-semibold rounded-xl transition-all shadow-lg ${
            !password || !token || loading
              ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
              : "bg-green-600 hover:bg-green-700 text-white hover:shadow-green-500/25 border border-green-500"
          }`}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
}
