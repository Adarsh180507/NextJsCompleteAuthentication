"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="flex flex-col items-center text-center p-10 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
          Verify <span className="text-blue-500">Email</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Please wait while we verify your account.
        </p>

        <div className="w-full mb-8">
          <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
            Token payload
          </p>
          <h2 className="p-3 bg-gray-950 border border-gray-800 text-orange-400 rounded-xl text-xs font-mono break-all shadow-inner">
            {token ? token : "No token provided"}
          </h2>
        </div>

        {verified && (
          <div className="flex flex-col items-center w-full animate-fade-in">
            <h2 className="text-2xl font-bold text-green-400 mb-6">
              ✓ Email Verified
            </h2>
            <Link
              href="/login"
              className="w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Continue to Login
            </Link>
          </div>
        )}

        {error && (
          <div className="w-full animate-fade-in">
            <h2 className="text-xl font-bold text-red-400 bg-red-950/30 border border-red-900/50 p-4 rounded-xl">
              Verification Failed
            </h2>
            <p className="text-sm text-gray-400 mt-3">
              The token is invalid or has expired.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
