import React from "react";
export default function Drink({ image, name, glass, category }) {
  return (
    <section>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name} </h2>
        <h2>{glass}</h2>
        <h2>{category}</h2>
      </div>
    </section>
  );
}
