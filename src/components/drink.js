import React from "react";
export default function Drink({ image, name, glass, category }) {
  return (
    <article className="text-center md: my-4 bg-blue-50 hover:bg-blue-300 p-2">
      <h2 className="mb-2 font-semibold text-2xl underline underline-offset-3">
        {name}{" "}
      </h2>
      <div className="w-3/5 mx-auto">
        <img className="" src={image} alt={name} />
      </div>
      <div className="text-xl font-bold">
        <h2>{glass}</h2>
        <h2>{category}</h2>
      </div>
    </article>
  );
}
