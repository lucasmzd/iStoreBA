"use client";
import React, { useEffect, useState } from "react";
import { ILoginProps } from "../../interfaces/types";
import { IErrorProps } from "../../interfaces/types";
import { validateLoginForm } from "../../helpers/validate";

const LoginView: React.FC = () => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Se envio el formulario");
  };

  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrors(errors);
  }, [userData]);

  return (
    <div>
      <div>
        <h1>Login</h1>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginView;