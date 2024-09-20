import { ILoginProps, IRegisterProps } from "@/interfaces/types";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return res.json();
    } else {
      Swal.fire({
        title: "Register failed!",
        icon: "error",
      });
      throw Error("Register failed!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function login(userData: ILoginProps) {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return res.json();
    } else {
      Swal.fire({
        title: "Login failed!",
        icon: "error",
      });
      throw Error("Login failed!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
