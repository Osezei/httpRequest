import React from "react";
import Loading from "./loading";
import Drink from "./drink";
import { useGlobalContext } from "../context";
import Footer from "./footer";

export default function Drinks() {
  const { drinks, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className="container md:block lg:grid grid-cols-2 gap-6">
        {drinks.map((item) => {
          return <Drink key={item.id} {...item} />;
        })}
      </section>
      <Footer />
    </>
  );
}
