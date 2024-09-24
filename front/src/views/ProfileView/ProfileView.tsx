"use client";
import { useRouter } from "next/navigation";
// import { Router } from "next/router";
import React from "react";
import Swal from "sweetalert2";

const ProfileView = () => {
  const router = useRouter()
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
      <h3>Bienvenido Usuario</h3>
      <button onClick={handleClick} disabled={false}>Logout</button>
    </div>
  );
};

export default ProfileView;
