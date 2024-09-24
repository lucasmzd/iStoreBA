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
    <div>
      {orders && orders.length > 0 ? (
        orders?.map((orders: IOrder) => {
          return (
            <div key={orders.id}>
              <div>
                <p>{new Date(orders.date)?.toLocaleDateString()}</p>
                <p>Status: {orders.status.toLocaleUpperCase()}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>No products in orders</p>
          <Link href="/">Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default OrdersView;
