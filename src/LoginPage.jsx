import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "https://www.vidaripay.com/"; 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-3xl font-bold text-[#00A86B]"> <img 
    src="/vlogo2.png" 
    alt="Vidaripay Logo" 
    className="h-16 w-auto mb-2"
  /></div>
          <p className="text-gray-500 text-sm mt-1">E‑Vendor Login</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
              required
            />
          </div>

          {/* Password */}
     <div className="relative">
  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
  
  <input
    type={passwordVisible ? "text" : "password"}
    placeholder="••••••••"
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A86B] pr-10"
    required
  />

  <button
    type="button"
    onClick={() => setPasswordVisible(!passwordVisible)}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
  >
    {passwordVisible ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
  </button>
</div>



          {/* Forgot Password */}
          <div className="flex justify-end">
            <button type="button" className="text-sm text-[#00A86B] hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#00A86B] text-white py-3 rounded-xl font-semibold hover:bg-[#008f5c] transition"
          >
            Login
          </button>

          {/* Create Account */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Don’t have an account?</span>{" "}
            <button type="button" className="text-[#00A86B] font-medium hover:underline">
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
