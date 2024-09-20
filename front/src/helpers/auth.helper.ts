import { IRegisterProps } from "@/interfaces/types";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
    try {
        const res = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        if (res.ok) {
            return res.json()
        } else {
            Swal.fire({
                title: "Register failed!",
                icon: "error"
              });
        }
    } catch (error:any) {
        throw new Error(error);
    }
}