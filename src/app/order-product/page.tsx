"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Place order");
    router.push("/");
  };
  return (
    <div>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Ana Sehifeye qayit</button>
    </div>
  );
};

export default OrderProduct;
