"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgotpassword", { email });
      toast.success("Password reset link sent to your email");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="flex flex-col p-10 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-white mb-4 tracking-tight text-center">
          Forgot Password
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Enter your email and we'll send you a link to reset your password.
        </p>

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Email Address
        </label>
        <input
          className="w-full px-4 py-3 mb-6 rounded-xl bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
        />

        <button
          onClick={onSubmit}
          disabled={!email || loading}
          className={`w-full px-6 py-3 font-semibold rounded-xl transition-all shadow-lg ${
            !email || loading
              ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
              : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25 border border-blue-500"
          }`}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Remember your password?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
