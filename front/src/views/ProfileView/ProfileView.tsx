"use client";
import { IUserSession } from "@/interfaces/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProfileView = () => {
  const router = useRouter()
  const [userData, setUserData] = useState<IUserSession>();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);
  const handleClick = () => {
    localStorage.removeItem("userSession");
    Swal.fire({
      title: "Logout successfully!",
      icon: "success"
    });
    router.push("/");
  }
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 my-12">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
        <h3 className="text-lg mb-2 text-center">Welcome, {userData?.user.name}</h3>
        <p className="text-sm mb-1 text-center">Email: {userData?.user.email}</p>
        <p className="text-sm mb-1 text-center">Phone: {userData?.user.phone}</p>
        <p className="text-sm mb-4 text-center">Address: {userData?.user.address}</p>
        <button onClick={handleClick} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
