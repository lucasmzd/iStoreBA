"use client";
import React, { useEffect, useState } from "react";
import { ILoginProps } from "../../interfaces/types";
import { IErrorProps } from "../../interfaces/types";
import { validateLoginForm } from "../../helpers/validate";
import { login } from "@/helpers/auth.helper";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const LoginView: React.FC = () => {

  const router =useRouter()

  const initialState = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState<ILoginProps>(initialState);
  const [errors, setErrors] = useState<IErrorProps>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login(userData)
    const {token, user} = response
    localStorage.setItem("userSession", JSON.stringify({token, user}))
    Swal.fire({
      title: "Login successfully!",
      icon: "success"
    });
    router.push("http://localhost:3000")
  };

  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrors(errors);
  }, [userData]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email_address"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="user@example.com"
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="•••••••"
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-300"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;