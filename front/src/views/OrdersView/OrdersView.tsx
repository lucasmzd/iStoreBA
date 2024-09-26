"use client";
import { IOrder, IUserSession } from "@/interfaces/types";
import React, { useEffect, useState } from "react";
import { getOrders } from "@/helpers/orders.helper";
import { useRouter } from "next/navigation";
import Link from "next/link";

const OrdersView = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [userData, setUserData] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

  const fetchData = async () => {
    const ordersResponse = await getOrders(userData?.token!);
    setOrders(ordersResponse);
  };

  useEffect(() => {
    if (userData?.user.name) {
      userData?.user.name === undefined ? router.push("/login") : fetchData();
    }
  }, [userData?.user]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 my-8">
      {orders && orders.length > 0 ? (
        orders?.map((order: IOrder) => {
          return (
            <div key={order.id} className="bg-white p-8 rounded shadow-md w-96 mb-4">
              <div className="text-center">
                <p className="text-sm mb-2">{new Date(order.date)?.toLocaleDateString()}</p>
                <p className="text-lg font-semibold">Status: {order.status.toLocaleUpperCase()}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="bg-white p-8 rounded shadow-md w-96 text-center">
          <p className="text-lg font-semibold mb-4">No products in orders</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
            Go Shopping
          </Link>
        </div>
      )}
    </div>
  );
};
  

export default OrdersView;
