"use client";
import React, { useEffect, useState } from "react";
import { IRegisterProps } from "../../interfaces/types";
import { IRegisterErrors } from "../../interfaces/types";
import { validateRegisterForm } from "../../helpers/validate";
import { register } from "@/helpers/auth.helper";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const RegisterView: React.FC = () => {

  const router =useRouter()

  const initialState = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };

  const [userData, setUserData] = useState<IRegisterProps>(initialState);
  const [errors, setErrors] = useState<IRegisterErrors>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await register(userData)
    Swal.fire({
      title: "Registered successfully!",
      icon: "success"
    });
    router.push("/login")
  };

  useEffect(() => {
    const errors = validateRegisterForm(userData);
    setErrors(errors);
  }, [userData]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
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
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
              placeholder="Matias Fernandez"
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-300"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={userData.address}
              onChange={handleChange}
              placeholder="Calle 123"
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-300"
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={userData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-300"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
