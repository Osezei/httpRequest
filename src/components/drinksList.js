import React from "react";
import Loading from "./loading";
import Drink from "./drink";
import { useGlobalContext } from "../context";

export default function Drinks() {
  const { drinks, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      {drinks.map((item) => {
        return <Drink key={item.id} {...item} />;
      })}
    </section>
  );
}
