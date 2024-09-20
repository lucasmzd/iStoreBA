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
    <div>
      <div>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email_address">Email</label>
          <input
            id="email_address"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="user@example.com"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="•••••••"
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={userData.name}
            onChange={handleChange}
            placeholder="Matias Fernandez"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={userData.address}
            onChange={handleChange}
            placeholder="Calle 123"
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={userData.phone}
            onChange={handleChange}
            placeholder="123-456-7890"
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterView;
