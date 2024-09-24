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
    <div>
      <h1>Profile</h1>
      <h3>Bienvenido {userData?.user.name}</h3>
      <p>Email: {userData?.user.email}</p>
      <p>Phone: {userData?.user.phone}</p>
      <p>Address: {userData?.user.address}</p>
      <button onClick={handleClick} disabled={false}>Logout</button>
    </div>
  );
};

export default ProfileView;
