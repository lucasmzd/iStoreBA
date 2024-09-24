"use client";
import { createOrder } from "@/helpers/orders.helper";
import { IProduct, IUserSession } from "@/interfaces/types";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartView = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);
  const [userData, setUserData] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (storedCart) {
        let totalCart = 0;
        storedCart?.map((item: IProduct) => {
          totalCart = totalCart + item.price;
        });
        setTotalCart(totalCart);
        setCart(storedCart);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

  const handleClick = async () => {
    const idProducts = cart?.map((product) => product.id);
    await createOrder(idProducts, userData?.token!);
    Swal.fire({
      title: "Order created successfully!",
      icon: "success",
    });
    setCart([]);
    setTotalCart(0);
    localStorage.setItem("cart", "[]");
  };

  return (
    <div className="flex flex-row items-center justify-between w-full p-4">
      <div>
        {cart && cart.length > 0 ? (
          cart?.map((cart: IProduct) => {
            return (
              <div key={cart.id}>
                <div>
                  <img src={cart.image} alt={"Product image" + cart.name} />
                  <p>{cart.name}</p>
                  <p>Price: ${cart.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div>
        <p>Total: ${totalCart}</p>
        <button onClick={handleClick}>Checkout</button>
      </div>
    </div>
  );
};

export default CartView;
